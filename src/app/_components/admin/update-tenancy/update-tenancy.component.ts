import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CloudPortalService } from '../../../_services/cloud-portal.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmDialogComponent } from '../../solution-catalog/iass-asset/confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-update-tenancy',
  templateUrl: './update-tenancy.component.html',
  styleUrls: ['./update-tenancy.component.scss']
})
export class UpdateTenancyComponent implements OnInit, AfterViewInit {
  selected = '';
  tenancy: any;
  currenttenancy: any;
  Tenancy_id = '';
  bo_name = '';
  bo_email = '';
  admin_uid = '';
  Tenancy_owner = '';
  Tenancy_owner_email = '';
  Home_region = '';
  Credit_limit = '';
  tstatus = '';
  updateddata: any;
  statuschecked: Boolean = false;

  constructor(private cloudservice: CloudPortalService, public dialog: MatDialog) { }

  ngOnInit() {
  }


  selectedTenancy(tenancy) {
    this.currenttenancy = tenancy.value;
    this.cloudservice.getTenancyDetailsById(tenancy.value)
      .subscribe(t_data => {
        console.log(t_data[0]);
        this.Tenancy_id = t_data[0].tenancy_id;
        this.bo_name = t_data[0].buisness_owner;
        this.bo_email = t_data[0].buisness_owner_email_id;
        this.admin_uid = t_data[0].admin_user_id;
        this.Tenancy_owner = t_data[0].tenancy_owner;
        this.Tenancy_owner_email = t_data[0].tenancy_owner_email_id;
        this.Home_region = t_data[0].home_region;
        this.Credit_limit = t_data[0].credit_limit;
        this.Credit_limit = this.numberWithCommas(this.Credit_limit);
        this.tstatus = t_data[0].status;
      })
  }

  Utonclick() {
    console.log(this.selected);
    this.updateddata = {
      currenttenancy: this.Tenancy_id,
      bo_name: this.bo_name,
      bo_email: this.bo_email,
      Tenancy_owner: this.Tenancy_owner,
      Tenancy_owner_email: this.Tenancy_owner_email,
      tstatus: this.tstatus
    };
    console.log('updatedata', this.updateddata);
    this.cloudservice.updateTenancyDetailsById(this.updateddata)
      .subscribe(result => {
        console.log(result);
        this.openDialog();
      })


  }
  ngAfterViewInit() {
    console.log("hi")
    this.cloudservice.getAllTenancies()
      .subscribe(result => {
        console.log(result);
        this.tenancy = result;


      })
  }
  openDialog() {
    // this.dialog.open();

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
      },
      width: '500px',
      panelClass: 'my-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  enable() {
    if (this.statuschecked == false) {
      document.getElementById("statustextid").style.color = "black";
    }
    else {
      document.getElementById("statustextid").style.color = "lightgray";
    }

  }
  getDisabledValue() {
    if (this.statuschecked == true) {
      return false;
    }
    else if (this.statuschecked == false) {
      return true;
    }
  }

  copyContents(value: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }

   numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

}
