import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CloudPortalService } from '../../../_services/cloud-portal.service';
import { NgxSpinnerService } from 'ngx-spinner';
<<<<<<< HEAD
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


=======

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
>>>>>>> 2891e135bbcb28a3c31067887b4aef66f2310e4a
@Component({
  selector: 'app-best-practices',
  templateUrl: './best-practices.component.html',
  styleUrls: ['./best-practices.component.scss']
})
export class BestPracticesComponent implements AfterViewInit {
<<<<<<< HEAD
  
  dataSource: any ;

  matTressNetworkisActive: Boolean = false;
  matTressIAMActive: Boolean = false;
  matTressComputeActive: Boolean = false;

  displayedColumns: string[] = [];
=======
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
>>>>>>> 2891e135bbcb28a3c31067887b4aef66f2310e4a

  tenancyname: any;
  reports: any;
  tenancies: any;
  selected_tenancy: any; 

  secuityList: any;
<<<<<<< HEAD

  iam_data: InterfaceIAM[] = [];
  network_data: InterfaceNetwork[] = [];
  compute_data: InterfaceCompute[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
=======
>>>>>>> 2891e135bbcb28a3c31067887b4aef66f2310e4a
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

<<<<<<< HEAD
=======
  ngOnInit() {

  }
>>>>>>> 2891e135bbcb28a3c31067887b4aef66f2310e4a

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
<<<<<<< HEAD
        console.log('errrr', err);
      });
=======
        console.log('errrr', err)
      })
>>>>>>> 2891e135bbcb28a3c31067887b4aef66f2310e4a

  }

  openViewReportSecurity(secList) {

    this.matTressNetworkisActive = true;
    this.matTressIAMActive = false;
<<<<<<< HEAD
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
=======
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
>>>>>>> 2891e135bbcb28a3c31067887b4aef66f2310e4a
