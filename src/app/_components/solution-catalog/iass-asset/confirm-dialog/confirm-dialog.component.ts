import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { CloudPortalService } from '../../../../_services/cloud-portal.service';

export interface DialogData {
  Instancename: any;
  pageTitle: any;

}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private snackBar: MatSnackBar, private clooudProvider: CloudPortalService) {}
  
    openSnackBar(message: string, action: string){
      this.snackBar.open(message, action, {
        duration: 2000,
      });
      this.dialogRef.close('yes')
    }

}
