import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';
import { RequestDialogOkeComponent } from '../request-dialog-oke/request-dialog-oke.component';

@Component({
  selector: 'app-request-oke',
  templateUrl: './request-oke.component.html',
  styleUrls: ['./request-oke.component.scss']
})
export class RequestOkeComponent implements OnInit {

  instanceName: any;
  pageTitle: any;
  constructor(private acRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {
    this.instanceName = 'oke';
    this.pageTitle = 'Oracle Kubernetes Engine';
  }

  ngOnInit() {
  
  }

  OpenRequestDialog() {
    const dialogRef = this.dialog.open(RequestDialogOkeComponent, {
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
    this.router.navigateByUrl('/(outlet1:iassAsset)', { skipLocationChange: true });
  }

}
