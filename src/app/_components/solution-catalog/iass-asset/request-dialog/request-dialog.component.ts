import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { CloudPortalService } from '../../../../_services/cloud-portal.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { toDate } from '@angular/common/src/i18n/format_date';
import {MatFileUploadModule} from 'angular-material-fileupload';

export interface DialogData {
  Instancename: any;
  pageTitle: any;

}

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.scss']
})
export class RequestDialogComponent {
  AD: any;
  region: any;
  shape: any;
  scripts: any;
  subnet: any;
  vcn: any;

  confirmed: Boolean = true;
  confirmationDialog: Boolean = false;
  message1: any
  finalResponse: any;
  max: any;
  current: any;
  progressbar: any
  initmsg: any;
  planmsg: any;
  applymsg: any;
  selectOptions: any;
  isenabled: any;
  ADselectOptions: any;
  ShapeselectOptions: any;
  RegionselectOptions: any;

  pageTitle: any;
  instanceName: any;
  initInstance: any;

  tdata = [];
  tenancyname: any;
  tenancies: any;
  selected: any;
  formregions = [];
  formcmpt = [];
  formvcn = [];
  formsubnet = [];
  formad = [];
  formsubnetonvcn = [];
  uniqformvcn = [];
  uniqregion = [];
  uniqtdataqregion = [];
  uniqdataformvcn = [];
  uniqcmpt = [];
  uniqtdataqcmpt = [];
  uniqad = [];
  compartment: any;
  tagspresent: Boolean = false;
  uploadpresent: Boolean = false;

  owner_chargeback: any;
  owner_team: any;
  owner_type: any;
  owner_uptime: any;

  tenancy_id: any;
  cmpt_id : any;
  subnet_id: any;
  vcn_ocid: any;
  file: any;
  advalue: any;

  httpURL = `http://${window.location.hostname}:3200/api/upload`;


  constructor(
    public dialogRef: MatDialogRef<RequestDialogComponent>,
    private cloudPortalService: CloudPortalService, private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog,
    private spinner: NgxSpinnerService, public MatFileUploadModule: MatFileUploadModule ) {
    this.finalResponse = 'failure';
    this.instanceName = data.Instancename;
    this.pageTitle = data.pageTitle;

  }

  ngAfterViewInit() {
    this.cloudPortalService.getActiveTenancies()
      .subscribe(tenancies => {
        // this.cloudPortalService.getActiveTenancyReports()
        //   .subscribe(reports => {

        console.log(tenancies)

        this.tenancies = [];

        for (let tenant in tenancies) {
          this.tenancies.push({
            name: tenancies[tenant].tenancy_name, value: tenancies[tenant].tenancy_name
          })
        }
        console.log("tid--->", tenancies.id);



      });

     
  }

  selectedtenancydata(tid) {
    this.uniqtdataqregion = [];
    this.uniqregion = [];
    this.uniqtdataqcmpt = [];
    this.uniqcmpt = [];
    this.tagspresent = true;
    if(this.instanceName === 'Linux' || this.instanceName === 'ubuntu'){
      this.uploadpresent = true ;
    }

    console.log("######   selected", tid);
    this.cloudPortalService.getmporderformdata(tid)
      .subscribe(result => {

        console.log('mporderdata#####', result);
        this.tdata = result;
        for (let i = 0; i < result.length; i++) {
          this.formregions.push(result[i].region);
          this.formad.push(result[i].sub_ad);
          this.formsubnet.push(result[i].subnet_name);
          this.formvcn.push(result[i].vcn_name);
          this.formcmpt.push(result[i].compartment_name);
          // console.log('regions--->>>', this.formregions);
        }
        console.log('after some sec', this.tdata)
        this.uniqtdataqregion = this.removeDuplicates(this.tdata, 'region');
        for (let i = 0; i < this.uniqtdataqregion.length; i++) {
          this.uniqregion.push(this.uniqtdataqregion[i].region);
        }
        console.log('uniqregion.......>', this.uniqregion);

        this.uniqtdataqcmpt = this.removeDuplicates(this.tdata, 'compartment_name');
        for (let i = 0; i < this.uniqtdataqcmpt.length; i++) {
          this.uniqcmpt.push(this.uniqtdataqcmpt[i].compartment_name);
        }

        console.log('uniqcmpt--->', this.uniqcmpt);
        for ( let j=0; j<this.tdata.length; j++){
          if (this.tdata[j].tenancy_name === tid ){
            this.tenancy_id= this.tdata[j].tenancy_ocid;
          }
        }
        console.log("tenancy_id-->",this.tenancy_id);
      });

     

  }
  selectedregiondata(rid) {
    let uniqdataformvcn = [];
    this.uniqformvcn = [];
    console.log("rid-->>", rid);

    for (let j = 0; j < this.formregions.length; j++) {
      if (this.uniqregion[j] === this.region) {


        uniqdataformvcn = this.removeDuplicates(this.tdata, 'vcn_name');

        for (let i = 0; i < uniqdataformvcn.length; i++) {
          this.uniqformvcn.push(uniqdataformvcn[i].vcn_name);
        }

      }
    }

    console.log('uniqvcn --->>', this.uniqformvcn);



  }

  selectedvcndata(vcnid) {
    let uniqdataad = [];
    this.uniqad = [];
    console.log('regiion--->', this.vcn);
    for (let j = 0; j < this.uniqformvcn.length; j++) {
      if (this.uniqformvcn[j] === this.vcn) {


        uniqdataad = this.removeDuplicates(this.tdata, 'sub_ad');

        for (let i = 0; i < uniqdataad.length; i++) {
          this.uniqad.push(uniqdataad[i].sub_ad);
        }

      }
    }
    console.log("uniq ad--->", this.uniqad);

    for ( let i=0; i<this.tdata.length; i++){
      if (this.tdata[i].vcn_name=== vcnid ){
        this.vcn_ocid= this.tdata[i].vcn_ocid;
      }
    }
    console.log("vcn_ocid-->",this.vcn_ocid);

  }

  selectedcmpt(){
     for ( let j=0; j<this.tdata.length; j++){
       if (this.tdata[j].compartment_name=== this.compartment){
         this.cmpt_id= this.tdata[j].compartment_ocid;
       }
     }
     console.log("cmpt id-->",this.cmpt_id);
  }
  selectedsubnet(){
    for ( let j=0; j<this.tdata.length; j++){
      if (this.tdata[j].subnet_name === this.subnet){
        this.subnet_id= this.tdata[j].subnet_ocid;
      }
    }
    console.log('subnet id -->',this.subnet_id);
 }
  selectedaddata(adid) {
    console.log('vcn-->', this.vcn);
    console.log('ad-->', this.AD)
    let uniqsubnetonvcnad = [];
    this.formsubnetonvcn = [];
    console.log('uniq----vcn-->', this.uniqformvcn);
    // uniqsubnetonvcnad = this.removeDuplicates(this.tdata, 'subnet_name');
    for (let j = 0; j < this.tdata.length; j++) {

      // for (let k= 0; k< this.uniqad.length;k++){
      if (this.tdata[j].vcn_name === this.vcn) {
        console.log('checking-- vcn>')
        if (this.tdata[j].sub_ad === this.AD) {
          console.log('checking for uniq subnets-->')
          uniqsubnetonvcnad.push(this.tdata[j].subnet_name);
        }
      }
     
      this.formsubnetonvcn = uniqsubnetonvcnad;
     
    }
    console.log('subnetonvcn',uniqsubnetonvcnad);
    console.log('uniqsubnet-->', this.formsubnetonvcn);

    if ((this.AD.indexOf('AD-1'))>0){
      this.advalue = "1";

    }

    else if ((this.AD.indexOf('AD-2'))>0){
      this.advalue = "2";

    }
    else if ((this.AD.indexOf('AD-3'))>0){
      this.advalue = "3";

    }

  }
  removeDuplicates(originalArray, objKey) {
    var trimmedArray = [];
    var values = [];
    var value;
    // console.log(originalArray);
    for (var i = 0; i < originalArray.length; i++) {
      value = originalArray[i][objKey];

      if (values.indexOf(value) === -1) {
        trimmedArray.push(originalArray[i]);
        values.push(value);
      }
    }

    return trimmedArray;

  }

  onNoClick(): void {
    this.dialogRef.close('No');
  }


  onYesClick(confirmation): void {

    this.scripts = {
      'Tenancy': this.tenancyname,
      'TenancyId': this.tenancy_id,
      'AD': this.advalue,
      'region': this.region,
      'shape': this.shape,
      'instance': this.instanceName,
      'subnet': this.subnet,
      'compartment': this.compartment,
      'vcn': this.vcn,
      'owner_chargeback': this.owner_chargeback,
      'owner_team': this.owner_team,
      'owner_type': this.owner_type,
      'owner_uptime': this.owner_uptime,
      'cmptId': this.cmpt_id,
      'subnetId': this.subnet_id,
      'vcnId': this.vcn_ocid
    }

    console.log(this.scripts);

    if (this.scripts.TenancyId != undefined && this.scripts.cmptId != undefined && this.scripts.subnetId != undefined && this.scripts.vcnId != undefined && this.scripts.AD != undefined && this.scripts.region != undefined && this.scripts.shape != undefined && this.scripts.Tenancy != undefined && this.scripts.subnet != undefined && this.scripts.compartment != undefined && this.scripts.vcn != undefined
      && this.scripts.owner_chargeback != undefined && this.scripts.owner_team != undefined && this.scripts.owner_type != undefined && this.scripts.owner_uptime != undefined) {

      //  this.dialogRef.close('Yes');
      // this.snackBar.open('Please wait while the instance has been created...', 'OK', {
      //   duration: 2000,
      // });

      this.confirmed = false;
      this.confirmationDialog = true;


    }

  }


  runscripts() {
    this.spinner.show();
    this.snackBar.open(' Making neccessary changes....', '', {
      duration: 2000,
    });
    console.log("======script values=====",this.scripts);
    this.cloudPortalService.initializeScripts(this.scripts)
      .subscribe(initializeScripts => {
        console.log("back to request");
        setTimeout(() => {
          console.log('Initilized successfully ?', initializeScripts);
          console.log("initialized script msg", initializeScripts.msg);
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
                            this.dialogRef.close('Yes')
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
                            this.dialogRef.close('No')
                          }
                        }, 5000);
                      });
                  }
                  else if (initializeScripts.msg == 'failure') {
                    console.log("failureeeeeeeeeeeeeeeeeeee")
                    this.spinner.hide();
                    this.snackBar.open('Some error occured...Please try again...', 'OK', {
                      duration: 2000,
                    });
                    this.dialogRef.close('No')
                  }
                  else {
                    this.spinner.hide();
                    this.snackBar.open('Some error occured...Please try again...', 'OK', {
                      duration: 2000,
                    });
                    this.dialogRef.close('No')
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
        this.dialogRef.close('No')
        console.log('error', error);
      });
  }
}
