import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';


@Component({
  selector: 'app-request-windows',
  templateUrl: './request-windows.component.html',
  styleUrls: ['./request-windows.component.scss']
})
export class RequestWindowsComponent implements OnInit {

  instanceName: any;
  pageTitle: any;
  constructor(private acRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {
    this.instanceName = 'windows';
    this.pageTitle = 'Windows';
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
