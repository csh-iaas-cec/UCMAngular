import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CloudPortalService } from '../../../_services/cloud-portal.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { MatPaginator, MatTableDataSource } from '@angular/material';



export interface InterfaceIAM {
  name: string;
  user_id: string;
}

export interface InterfaceNetwork {
  compartment_name: string;
  no_of_rules: string;
  sls_name: string;
  subnet_name: string;
  vcn_name: string;
}

export interface InterfaceCompute {
  compartment_name: string;
  instance_name: string;
  sls_name: string;
  subnet_name: string;
  vcn_name: string;
}



@Component({
  selector: 'app-best-practices',
  templateUrl: './best-practices.component.html',
  styleUrls: ['./best-practices.component.scss']
})
export class BestPracticesComponent implements AfterViewInit {

  
  dataSource: any ;

  matTressNetworkisActive: Boolean = false;
  matTressIAMActive: Boolean = false;
  matTressComputeActive: Boolean = false;

  displayedColumns: string[] = [];

  tenancyname: any;
  reports: any;
  tenancies: any;
  selected_tenancy: any; 

  secuityList: any;

  iam_data: InterfaceIAM[] = [];
  network_data: InterfaceNetwork[] = [];
  compute_data: InterfaceCompute[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private cloudservice: CloudPortalService, private spinner: NgxSpinnerService) {

  }

  ngAfterViewInit() {
    this.cloudservice.getActiveTenancies()
      .subscribe(tenancies => {
      
            console.log(tenancies)
          
            this.tenancies = [];
            this.reports = [];
            for (let tenant in tenancies) {
              this.tenancies.push({
                name: tenancies[tenant].tenancy_name, value: tenancies[tenant].tenancy_name
              })
            }

      });

  }


  selectchangetenancy(selected_tenancy){
    console.log('select change called')
   this.spinner.show();
   this.spinner.hide();

    console.log("##",selected_tenancy);

    this.cloudservice.getSecurityLists(selected_tenancy)
      .subscribe(secList => {

        this.secuityList = secList;
        this.spinner.hide();
      }, err => {
        console.log('errrr', err);
      });

  }

  openViewReportSecurity(secList) {

    this.matTressNetworkisActive = true;
    this.matTressIAMActive = false;
    this.matTressComputeActive = false;
    this.displayedColumns = [
      'compartment_name',
      'no_of_rules',
      'sls_name',
      'subnet_name',
      'vcn_name'
    ];
    this.network_data = secList;
    console.log(this.network_data);
  }

  openViewReportIAM(secList) {
    this.displayedColumns = [
      'name',
      'user_id'
    ];
    this.iam_data = secList;
    console.log(this.iam_data);
    this.matTressNetworkisActive = false;
    this.matTressIAMActive = true;
    this.matTressComputeActive = false;
  }

  open_iam_reports(data) {
    this.dataSource = new MatTableDataSource<InterfaceIAM>(data);
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator);

  }

  open_network_reports(data) {
    this.dataSource = new MatTableDataSource<InterfaceNetwork>(data);
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator);

  }

  open_compute_reports(data) {
    this.dataSource = new MatTableDataSource<InterfaceCompute>(data);
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator);
    console.log(data);

  }

  openViewReportCompute(secList) {
    this.displayedColumns = [
      'compartment_name',
      'instance_name',
      'sls_name',
      'subnet_name',
      'vcn_name'
    ];
    this.compute_data = secList;
    this.matTressNetworkisActive = false;
    this.matTressComputeActive = true;
    this.matTressIAMActive = false;
  }
}
