
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CloudPortalService } from '../../_services/cloud-portal.service';

@Component({
  selector: 'app-services-marketplace',
  templateUrl: './services-marketplace.component.html',
  styleUrls: ['./services-marketplace.component.scss']
})
export class ServicesMarketplaceComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;

  cichecked: Boolean = false;
  adwchecked: Boolean = false;
  atpchecked: Boolean = false;
  cschoice: Boolean = false;
  tenancyinfo: Boolean = false;
  applyTerraormButton: Boolean = false;

  selected = 'VMStandard1.1';

  packageName = 'Terraform_Generator';
  packageDescription = 'Description';
  region = 'us-asburn-1';
  ownersemail = 'abc@abc.com';
  customscript = 'sudo touch testing.txt';
  computeInstanceName = 'Terraform_Generator_Compute';
  computeinstanceShape = 'VMStandard2.1';
  adwDisplayName = 'Terraform_Generator_ADW';
  adwcpucount = 1;
  adwstoragesize = 1;
  atpdisplayname = 'Terraform_Generator_ATP';
  atpcpucount = 1;
  atpstoragesize = 1;
  vcn = 'None';
  subnet = 'None';
  tenant = 'None';
  compartment = 'None';
  user = 'None';
  fingerprint = 'None';

  downloadbuttontext = 'DOWNLOAD PACKAGE';
  downloadbutton: Boolean = true;

  creatingzipfile: Boolean = false;
  terraformscript: any;
  emailFormControl: any;

  foldername: any;
  zipfoldertodownload: any;
  downloadUrl: Boolean = false;
  deploybutton: Boolean = false;

  constructor(private clousdervice: CloudPortalService) {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  ngOnInit() {
    // this.region = [ 
    //   {name:'us-asburn-1', value:'us-asburn-1'},
    //   {name:'eu-frankfurt-1', value:'eu-frankfurt-1'},
    //   {name:'us-phoenix-1', value:'us-phoenix-1'},
    //   {name:'ca-toronto-1', value:'ca-toronto-1'}
    // ]

  }
  //email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //     this.email.hasError('email') ? 'Not a valid email' :
  //       '';
  // }
  confirmTerraform() {
    this.tenancyinfo = true;
    this.applyTerraormButton = true;

  }

  applyTerraform(task) {

    this.downloadbuttontext = 'CREATING PACKAGE...'
    this.creatingzipfile = true;
    this.downloadUrl = false;
    this.deploybutton = true;
    console.log(this.packageName, this.packageDescription);
    this.terraformscript = {
      package_name: this.packageName,
      description: this.packageDescription,
      region: this.region || 'us',
      vcn: this.vcn,
      subnet: this.subnet,
      services: [
        {
          service: 'compute_instance',
          display_name: this.computeInstanceName,
          instance_shape: this.computeinstanceShape,
          custom_script: this.customscript
        },
        {
          service: 'autonomous_db',
          display_name: this.adwDisplayName,
          cpu_count: this.adwcpucount,
          storage_size: this.adwstoragesize,
          custom_script: 'na'
        },
        {
          service: 'autonomous_tp',
          display_name: this.atpdisplayname,
          cpu_count: this.atpcpucount,
          storage_size: this.atpstoragesize,
          custom_script: 'na'
        }
      ],
      tenant: this.tenant,
      compartment: this.compartment,
      user: this.user,
      fingerprint: this.fingerprint
    };
    console.log(this.terraformscript);

    this.clousdervice.runScriptsforServiceAutomation(this.terraformscript, task)
      .subscribe(result => {
        console.log('applied', result);
        this.creatingzipfile = false;
        this.downloadbutton = false;
        this.downloadUrl = true;
        this.deploybutton = false;
        this.foldername = result.foldername;
        this.zipfoldertodownload = `http://${window.location.hostname}:${window.location.port}/api/downloadZipFolder?filename=${result.foldername}`
        console.log(this.zipfoldertodownload)
      });
  }
  downloadfolder() {
    console.log('Hii', this.foldername)
    setTimeout(() => {
      console.log('Wait 2 sec....')
      this.clousdervice.deleteZipFolder(this.foldername)
      .subscribe(folderdeleted => {
        console.log('Folder deleted successfully', folderdeleted.msg)
      })
    }, 20000)
    
  }
  csyes() {
    this.cschoice = true;
  }
  csno() {
    this.cschoice = false;
  }

}
