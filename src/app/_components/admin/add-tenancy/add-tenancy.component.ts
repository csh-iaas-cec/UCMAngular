import { Component, OnInit } from '@angular/core';
import { CloudPortalService } from '../../../_services/cloud-portal.service';

@Component({
  selector: 'app-add-tenancy',
  templateUrl: './add-tenancy.component.html',
  styleUrls: ['./add-tenancy.component.scss']
})
export class AddTenancyComponent implements OnInit {
  tenancy_name = '';
  Tenancy_id = '';
  bo_name = '';
  bo_email = '';
  admin_uid = '';
  Tenancy_owner = '';
  Tenancy_owner_email = '';
  Home_region = '';
  Credit_limit = '';
  tstatus = '';
  userdata: any;
  r_date: any;

  constructor(private cloudservice: CloudPortalService) { }

  ngOnInit() {
  }
  atonclick() {
    var date = new Date();
    this.r_date = date.toDateString();
    this.r_date = this.formatDate(this.r_date);
    console.log("Report date :", this.r_date);
    this.userdata = {
      tenancyname: this.tenancy_name,
      tenancyid: this.Tenancy_id,
      bo_name: this.bo_name,
      bo_email: this.bo_email,
      Tenancy_owner: this.Tenancy_owner,
      Tenancy_owner_email: this.Tenancy_owner_email,
      adminuid: this.admin_uid,
      homeregion: this.Home_region,
      creditlimit: this.Credit_limit,
      status: this.tstatus,
      report_date: this.r_date

    };
    console.log('userdata  :', this.userdata);
    this.cloudservice.addTenancyDetailsById(this.userdata)
      .subscribe(result => {
        console.log(result);
      });
  }
  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

}
