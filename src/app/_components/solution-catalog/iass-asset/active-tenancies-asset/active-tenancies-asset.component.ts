import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CloudPortalService } from '../../../../_services/cloud-portal.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-active-tenancies-asset',
  templateUrl: './active-tenancies-asset.component.html',
  styleUrls: ['./active-tenancies-asset.component.scss']
})
export class ActiveTenanciesAssetComponent implements OnInit {
  activeInstances: any;
  msgForNoInstance: any;

  linuxInstance: Boolean = false;
  linuxInstanceDetails: any;

  ubuntuInstance: Boolean = false;
  ubuntuInstanceDetails: any;

  jdeInstance: Boolean = false;
  jdeInstanceDetails: any;

  okeInstance: Boolean = false;
  okeInstanceDetails : any;

  windowsInstance: Boolean = false;
  windowsInstanceDetails: any;

  instanceDetails: any;
  showInstanceDetails: Boolean = false;

  image : any;
  AvailabilityDomain : any;
  shape : any;
  privateIP : any;
  publicIP : any;
  status : any;
  OCPU : any;
  memory : any;
  OMCStatus : any;
  region : any;
  VCN : any;
  subnetCIDR : any;
  RootVolume : any;
  RootVolumeSize : any;
  AttachedVolume : any;
  MountPoint : any;
  AttachedVolumeSize : any;
  instance_Name : any;
  os: boolean = false;
  operatingsystem : any;


  constructor(private router: Router, private cloudservice: CloudPortalService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    this.cloudservice.getActiveInstances()
      .subscribe(activeData => {
        console.log(activeData)

        this.activeInstances = activeData
        this.activeInstances.forEach(element => {
          console.log(element.instanceName)
         
          if (element.instanceName == "Linux") {
            this.linuxInstance = true;
            this.os = true;
            this.operatingsystem = "Linux";
            this.linuxInstanceDetails = element;
            console.log(this.linuxInstanceDetails)
            this.msgForNoInstance = ""
            this.instance_Name = element.instanceName;
          }
          else if (element.instanceName == "ubuntu") {
            this.ubuntuInstance = true;
            this.os = true;
            this.operatingsystem = "Ubuntu";
            this.ubuntuInstanceDetails = element;
            this.msgForNoInstance = ""
            this.instance_Name = element.instanceName;
          }

          else if (element.instanceName == "JDE") {
            this.jdeInstance = true;
            this.jdeInstanceDetails = element;
            this.msgForNoInstance = ""
            this.instance_Name = element.instanceName;
          }
          else if (element.instanceName == "OKE") {
            this.okeInstance = true;
            this.okeInstanceDetails = element;
            this.msgForNoInstance = ""
            this.instance_Name = element.instanceName;
          }
          else if (element.instanceName == "windows") {
            this.windowsInstance = true;
            this.os = true;
            this.operatingsystem = "Windows";
            this.windowsInstanceDetails = element;
            this.msgForNoInstance = ""
            this.instance_Name = element.instanceName;
          }
          this.spinner.hide();
        });
      })

    if (this.linuxInstance == false && this.ubuntuInstance == false && this.jdeInstance == false) {
      this.msgForNoInstance = "No Active Instances."
    }
  }
  goBack() {
    this.router.navigateByUrl('/(outlet1:iassAsset)', { skipLocationChange: true });
  }

  openInstanceDetails(instance, instanceDetails) {
    this.showInstanceDetails = true;
    console.log('from utton', instance)
    this.instanceDetails = {
      'instance': instance,
      'Details': instanceDetails

    }
    console.log(this.instanceDetails)
    // this.navCtrl.push(InstanceDetailsPage, this.instanceDetails)

    this.image =this.instanceDetails.Details.image;
    this.AvailabilityDomain = this.instanceDetails.Details.AD;
    this.shape = this.instanceDetails.Details.shape;
    this.privateIP = this.instanceDetails.Details.privateIP;
    this.publicIP = this.instanceDetails.Details.publicIP;
    this.status = "Running"
    this.OCPU =  '1';
    this.memory = '15 GiB';
    this.OMCStatus = "NA" //'Enabled';
    this.region = 'Ashburn';
    this.VCN = 'xx.xx.xx.xx/16';
    this.subnetCIDR = 'xx.xx.xx.xx/24';
    this.RootVolume = "NA"//'/';
    this.RootVolumeSize = "NA"//'30 GiB';
    this.AttachedVolume = "NA"///dev/sdb1';
    this.MountPoint = "NA"//'/mnt/mydrv';
    this.AttachedVolumeSize = "NA"//'500 GiB';


  }
}
