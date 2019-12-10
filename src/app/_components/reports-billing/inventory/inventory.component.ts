import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CloudPortalService } from '../../../_services/cloud-portal.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElementVirtualMachine {
  index: any;
  instance_name: string;
  region: string;
  availability_domain: string;
  image: string;
  private_ip: string;
  shape: string;
  vcn_name: string;
  public_ip: string;


}
export interface PeriodicElementVolumes {
  volume_type: string;
  size: number;
  instance_id: number;
  backup_policy: string;
  attached_instance: string;
}

export interface PeriodicElementVCN {
  vcn_name: string;
  compartment_name: number;
  cidr_block: number;
}

export interface PeriodicElementSubnetAndOthers {
  resource_name: string;
  resource_type: number;
}
export interface PeriodicElementObjectStorage {
  bucket_name : string;
  object_name : string;
}


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements  AfterViewInit {
  tenancies: any;
  reports: any;

  openDivTenancy: Boolean = true;
  openDivTenancyDetails: Boolean = false;
  openDivComputNwDetails: Boolean = false;
  openDTable: Boolean = false;
  tablevm: Boolean = false;
  tablevolume: Boolean = false;
  tablevcn: Boolean = false;
  tablesubnet: Boolean = false;
  tableobject_storage: Boolean = false;
  tableHeader: any;

  tenancyname: any;
  reportname: any;

  compute_vm: any;
  comput_boot_count: any;
  compute_block_volume: any;

  network_vcn: any;
  network_subnet: any;
  network_others: any;
  os_bucket: any;
  os_object:any;
  os_bucket_size:any;

  ELEMENT_DATA_VM: PeriodicElementVirtualMachine[] = [];
  ELEMENT_DATA_VOLUME: PeriodicElementVolumes[] = [];
  ELEMENT_DATA_VCN: PeriodicElementVCN[] = [];
  ELEMENT_DATA_SUBNETANDOTHERS: PeriodicElementSubnetAndOthers[] = [];
  ELEMENT_DATA_OBJECTSTORAGE: PeriodicElementObjectStorage[]=[];

  displayedColumns: string[] = [];
  dataSource: any;

  displayedColumns1: string[] = ['created', 'state', 'number', 'title'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor(private cloudservice: CloudPortalService) { }

  ngAfterViewInit() {
    this.cloudservice.getActiveTenancies()
      .subscribe(tenancies => {
        this.cloudservice.getActiveTenancyReports()
          .subscribe(reports => {

            console.log(tenancies)
            console.log('reports ==>', reports)
            this.tenancies = [];
            this.reports = [];
            for (let tenant in tenancies) {
              this.tenancies.push({
                name: tenancies[tenant].tenancy_name, value: tenancies[tenant].tenancy_name
              })
            }
            for (let reportdate in reports) {
              let date1 = (reports[reportdate].report_date);
              let date2 = date1.split('T')
              this.reports.push({
                name: date2[0], value: date2[0]
              })
            }

          });


      });

  }

  getTenancyDetails() {
    this.openDivComputNwDetails = true;
    console.log(this.tenancyname, this.reportname);
    this.cloudservice.summarycountByID(this.tenancyname, this.reportname)
      .subscribe(tenancydetails => {
        console.log('tency details---', tenancydetails[0]);
        this.compute_vm = tenancydetails[0].compute_count;
        this.compute_block_volume = tenancydetails[0].block_count;
        this.comput_boot_count = tenancydetails[0].boot_count;
        this.network_vcn = tenancydetails[0].vcn_count;
        this.network_subnet = tenancydetails[0].subnet_count;
        this.network_others = tenancydetails[0].others_count;
        this.os_bucket = tenancydetails[0].bucket_count;
        this.os_object = tenancydetails[0].objects_count;
        this.os_bucket_size = tenancydetails[0].total_size;
      });

  }

  openTenancyDetails(tablename) {
    this.openDivTenancy = false;
    this.openDivTenancyDetails = true;
    this.isLoadingResults = true;
    this.tablevm = false;
    this.tablevolume = false;
    this.tablevcn = false;
    this.tablesubnet = false;
    this.tableobject_storage = false;

    let instanceParams = {
      name: tablename,
      reportdate: this.reportname,
      tenancyname: this.tenancyname
    }
    this.cloudservice.getInstanceTable(instanceParams)
      .subscribe(tabledata => {
        console.log(tabledata[0])

        if (tablename == 'virtualMachine') {
          this.displayedColumns = ['index', 'instance_name', 'region', 'availability_domain', 'image', 'private_ip', 'public_ip', 'shape', 'vcn_name'];
          this.ELEMENT_DATA_VM = tabledata
          this.dataSource = new MatTableDataSource<PeriodicElementVirtualMachine>(this.ELEMENT_DATA_VM);
          this.dataSource.paginator = this.paginator;
          this.tablevm = true;
          this.tableHeader = 'COMPUTE'


        }
        else if (tablename == 'bootvolume' || tablename == 'blockvolume') {
          this.displayedColumns = ['volume_type', 'size', 'instance_id', 'backup_policy', 'attached_instance'];
          this.ELEMENT_DATA_VOLUME = tabledata;
          this.dataSource = new MatTableDataSource<PeriodicElementVolumes>(this.ELEMENT_DATA_VOLUME);
          this.dataSource.paginator = this.paginator;
          this.tablevolume = true;
          this.tableHeader = 'COMPUTE'

        }
        else if (tablename == 'vcn') {
          this.displayedColumns = ['vcn_name', 'compartment_name', 'cidr_block'];
          this.ELEMENT_DATA_VCN = tabledata;
          this.dataSource = new MatTableDataSource<PeriodicElementVCN>(this.ELEMENT_DATA_VCN);
          console.log('datsource', this.dataSource)
          this.dataSource.paginator = this.paginator;
          this.tablevcn = true;
          this.tableHeader = 'NETWORK'

        }
        else if (tablename == 'subnet' || tablename == 'others') {
          this.displayedColumns = ['resource_name', 'resource_type'];
          this.ELEMENT_DATA_SUBNETANDOTHERS = tabledata;
          this.dataSource = new MatTableDataSource<PeriodicElementSubnetAndOthers>(this.ELEMENT_DATA_SUBNETANDOTHERS);
          console.log('datsource', this.dataSource)
          this.dataSource.paginator = this.paginator;
          this.tablesubnet = true;
          this.tableHeader = 'NETWORK'


        }
        else if (tablename == 'bucket' || tablename == 'object' || tablename == 'size') {
          this.displayedColumns = ['bucket_name','bucket_size_in_kb', 'compartment_name', 'created_time','is_public','number_of_objects','storage_type'];
          console.log("object display columns", this.displayedColumns);
        
         
          for (let i = 0; i < tabledata.length; i++) {
            if(tabledata[i].bucket_size_in_kb!=0){
              tabledata[i].bucket_size_in_kb = tabledata[i].bucket_size_in_kb*0.000001;
            }
           
            if(tabledata[i].is_public == 0){
               tabledata[i].is_public = "No"
             }
            else{
             tabledata[i].is_public = "Yes"
             }
          }
          console.log("object table data", tabledata);
          this.ELEMENT_DATA_OBJECTSTORAGE = tabledata;
          console.log('object element',this.ELEMENT_DATA_OBJECTSTORAGE);
          this.dataSource = new MatTableDataSource<PeriodicElementObjectStorage>(this.ELEMENT_DATA_OBJECTSTORAGE);
          console.log('Object datasource', this.dataSource)
          this.dataSource.paginator = this.paginator;
          this.tableobject_storage = true;
          this.tableHeader = 'OBJECT STORAGE'

        }
        this.isLoadingResults = false;
      })


  }

  goBack() {
    this.openDivTenancyDetails = false;
    this.openDivTenancy = true;
  }


}
