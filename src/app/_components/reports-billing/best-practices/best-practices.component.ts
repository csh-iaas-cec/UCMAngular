import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CloudPortalService } from '../../../_services/cloud-portal.service';
import { NgxSpinnerService } from 'ngx-spinner';

interface Tenancy1Node {
  name2: string;
  name3: string;
}
interface TenancyNode {
  name1: string;
  children: Tenancy1Node[];
}
interface FoodNode {
  name: string;
  children: FoodNode[];

}



/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-best-practices',
  templateUrl: './best-practices.component.html',
  styleUrls: ['./best-practices.component.scss']
})
export class BestPracticesComponent implements AfterViewInit {
  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  dataSource1 = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  dataSourceiam = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  TREE_DATA: FoodNode[] = [];
  TREE_DATA_1: FoodNode[] = [];
  TREE_DATA_2: FoodNode[] = [];

  matTressNetworkisActive: Boolean = false;
  matTressIAMActive: Boolean = false;

  tenancyname: any;
  reports: any;
  tenancies: any;
  selected_tenancy: any; 

  secuityList: any;
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

  ngOnInit() {

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
        console.log('errrr', err)
      })

  }

  openViewReportSecurity(secList) {

    this.matTressNetworkisActive = true;
    this.matTressIAMActive = false;
    const matTree = document.querySelector('treeColorRed');
    this.TREE_DATA = [
      {
        name: 'Security list exposed to Public Internet',
        children: secList.securityinternet
      },
      {
        name: 'Security list allowing All Protocols',
        children: secList.securityallprotocol
      },
      {
        name: 'Security list having all ports open',
        children: secList.securityallports
      }

    ];

    this.TREE_DATA_1 = [{
      name: 'Security list having port 80 exposed to Public internet',
      children: secList.securityport80
    },
    {
      name: 'Security list having port 7001 exposed to Public internet',
      children: secList.securityport7001
    }]
    console.log(this.TREE_DATA);
    this.dataSource.data = this.TREE_DATA;
    this.dataSource1.data = this.TREE_DATA_1;
  }

  openViewReportIAM(secList) {
    console.log(secList)
    this.matTressNetworkisActive = false;
    this.matTressIAMActive = true;
    const matTree = document.querySelector('treeColorRed');
    secList = secList[0]
    this.TREE_DATA_2 = [
      {
        name: ' Users who are invalid',
        children: secList.inValid
      },
      {
        name: 'Local Users',
        children: secList.local
      },
      {
        name: ' Local users without MFA enabled',
        children: secList.localWithoutMFA
      },
      {
        name: 'Service Users',
        children: secList.service
      }

    ];


    console.log(this.TREE_DATA_2);
    this.dataSourceiam.data = this.TREE_DATA_2;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}