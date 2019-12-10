import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';

@Component({
  selector: 'app-request-ubuntu',
  templateUrl: './request-ubuntu.component.html',
  styleUrls: ['./request-ubuntu.component.scss']
})
export class RequestUbuntuComponent implements OnInit {
  instanceName: any;
  pageTitle: any;
  constructor(private acRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) { 
    this.instanceName = 'ubuntu';
    this.pageTitle = 'Ubuntu';
  }

  ngOnInit() {
  }
  OpenRequestDialog() {
    const dialogRef = this.dialog.open(RequestDialogComponent, {
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
