import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CloudPortalService } from '../../../../_services/cloud-portal.service';

@Component({
  selector: 'app-request-jde',
  templateUrl: './request-jde.component.html',
  styleUrls: ['./request-jde.component.scss']
})
export class RequestJdeComponent implements OnInit {
  instanceName: any;
  pageTitle: any;
  constructor(private acRoute: ActivatedRoute, private router: Router, public dialog: MatDialog,
    private cloudportalservice: CloudPortalService) {
    this.instanceName = 'JDE';
    this.pageTitle = 'JDE Setup with VCN';
  }

  ngOnInit() {
  
  }

  OpenRequestDialog() {
   const dialogRef =  this.dialog.open(RequestDialogComponent, {
      data: {
        Instancename: this.instanceName,
        pageTitle: this.pageTitle
      },
      width: '700px',
      panelClass: 'my-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    
    });

  }
  goBack() {
    this.router.navigateByUrl('/(outlet1:iassAsset)', { skipLocationChange: true });  }

}
