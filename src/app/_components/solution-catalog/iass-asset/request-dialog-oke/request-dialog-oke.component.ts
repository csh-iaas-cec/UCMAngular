import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { CloudPortalService } from '../../../../_services/cloud-portal.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';

export interface DialogData {
  Instancename: any;
  pageTitle: any;

}

@Component({
  selector: 'app-request-dialog-oke',
  templateUrl: './request-dialog-oke.component.html',
  styleUrls: ['./request-dialog-oke.component.scss']
})
export class RequestDialogOkeComponent  {

  AD: any;
  region: any;
  shape: any;
  scripts: any;
  message1: any;
  finalResponse: any;
  max: any;
  current: any;
  progressbar: any;
  initmsg: any;
  planmsg: any;
  applymsg: any;
  selectOptions: any;
  confirmed: any = true;
  confirmationDialog: Boolean = false;
  isenabled: any;
  ADselectOptions: any;
  ShapeselectOptions: any;
  RegionselectOptions: any;
  nodepoolsOptions: any;
  nodepoolquantitypersubnetOptions: any;
  nodepoolimagenameOptions: any;


  pageTitle: any;
  instanceName: any;
  initInstance: any;

  nodepools: any;
  nodepoolquantitypersubnet: any;
  nodepoolnodeshape: any;
  nodepoolimagename: any;
  clustername: any;
  nodepoolnameprefix: any;

  constructor(public dialogRef: MatDialogRef<RequestDialogOkeComponent>,
    private cloudPortalService: CloudPortalService, private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog,
    private spinner: NgxSpinnerService) {

    this.finalResponse = 'failure';
    this.instanceName = data.Instancename;
    this.pageTitle = data.pageTitle;
  }

 

  onYesClick() {
    this.scripts = {
      'AD': this.AD,
      'region': this.region,
      'shape': this.shape,
      'instance': this.instanceName
    }

    console.log(this.scripts);

    if (this.scripts.AD != undefined || this.scripts.region != undefined || this.scripts.shape != undefined) {

      //  this.dialogRef.close('Yes');
      // this.snackBar.open('Please wait while the instance has been created...', 'OK', {
      //   duration: 2000,
      // });
      this.confirmed = false;
      this.confirmationDialog = true;
    }
  }


  onNoClick(): void {
    this.dialogRef.close('No');
  }

  runscripts() {
    this.confirmationDialog = false;
    this.spinner.show();
    this.snackBar.open(' Making neccessary changes....', '', {
      duration: 2000,
    });
    this.cloudPortalService.initializeScripts(this.scripts)
      .subscribe(initializeScripts => {
        setTimeout(() => {
          console.log('Initilized successfully ?', initializeScripts);
          if (initializeScripts.msg == 'success') {
            this.isenabled = false;
            /* popping snackbar for successful execution of init Script */

            this.snackBar.open('Initializing and Planning....', 'OK', {
              duration: 2000,
            });

            this.cloudPortalService.runScriptsinit(this.scripts)
              .subscribe(runScriptinit => {
                setTimeout(() => {
                  console.log('runScriptsinit done successfully');
                  if (runScriptinit.msg == 'success') {
                    this.planmsg = 'Planning Complete';
                    this.snackBar.open('Applying...', 'OK', {
                      duration: 2000,
                    });
                    this.cloudPortalService.runScriptsapply()
                      .subscribe(scriptsapply => {
                        setTimeout(() => {
                          console.log('Scripts Apply', scriptsapply);
                          if (scriptsapply.msg == 'success') {
                            this.isenabled = false;
                            this.applymsg = 'Created Successfully';
                            this.spinner.hide();
                            this.snackBar.open('Scripts ran successfully!', 'OK', {
                              duration: 2000,
                            });
                          }
                          else if (initializeScripts.msg == 'failure') {
                            console.log('failureeeeeeeeeeeeeeeeeeee');
                            this.spinner.hide();
                            this.snackBar.open('Some error occured...Please try again...', 'OK', {
                              duration: 2000,
                            });
                          }
                          else {
                            this.spinner.hide();
                            this.snackBar.open('Some error occured...Please try again...', 'OK', {
                              duration: 2000,
                            });
                          }
                        }, 5000);
                      });
                  }
                  else if (initializeScripts.msg == 'failure') {
                    console.log('failureeeeeeeeeeeeeeeeeeee');
                    this.spinner.hide();
                    this.snackBar.open('Some error occured...Please try again...', 'OK', {
                      duration: 2000,
                    });
                  }
                  else {
                    this.spinner.hide();
                    this.snackBar.open('Some error occured...Please try again...', 'OK', {
                      duration: 2000,
                    });
                  }
                }, 5000);
              });


          }
        }, 5000);
      }, error => {
        this.spinner.hide();
        this.snackBar.open('Some error occured...Please try again...', 'OK', {
          duration: 2000,
        });
        console.log('error', error);
      });
  }

}
