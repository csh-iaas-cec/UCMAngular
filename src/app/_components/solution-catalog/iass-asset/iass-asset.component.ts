import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ImagefilterPipePipe } from '../../../_helpers/imagefilter-pipe.pipe';


@Component({
    selector: 'app-iass-asset',
    templateUrl: './iass-asset.component.html',
    styleUrls: ['./iass-asset.component.scss']
})




export class IassAssetComponent implements OnInit {
    list: any;
    name: any;
    constructor(public dialog: MatDialog, private router: Router) {   }

    ngOnInit() {
        this.list = [{
            name: 'jde',
            imgsrc: '../../../assets/imgs/solution/JDE.png',
            value : ' INFRA FOR JD EDWARDS - ONE CLICK'
        },
        {
            name: 'ebs',
            imgsrc: '../../../assets/imgs/solution/EBS.png',
            value : '  INFRA FOR E BUSINESS SUITE - ONE CLICK'
        },
        {
            name: 'windows',
            imgsrc: '../../../assets/imgs/solution/Windows.png',
            value : 'WINDOWS SERVER'
        },
        {
            name: 'oke',
            imgsrc: '../../../assets/imgs/solution/oracle-oke.png',
            value : 'ORACLE KUBERNETES ENGINE'
        },
        {
            name: 'linux',
            imgsrc: '../../../assets/imgs/solution/Linux.png',
            value : 'ORACLE LINUX'
        },
        ];
    }

    openRequest(requestname) {
        if (requestname == 'jde') {
            this.router.navigateByUrl('/(outlet1:jdeRequest)', { skipLocationChange: true });
        }
        else if (requestname == 'ebs') {
            // this.router.navigateByUrl('/(outlet1:ebsRequest)', { skipLocationChange: true });
        }
        else if (requestname == 'psoft') {
            // this.router.navigateByUrl('/(outlet1:psoftRequest)', { skipLocationChange: true });
        }
        else if (requestname == 'siebel') {
            // this.router.navigateByUrl('/(outlet1:siebelRequest)', { skipLocationChange: true });
        }
        else if (requestname == 'ubuntu') {
            this.router.navigateByUrl('/(outlet1:ubuntuRequest)', { skipLocationChange: true });
        }
        else if (requestname == 'linux') {
            this.router.navigateByUrl('/(outlet1:linuxRequest)', { skipLocationChange: true });
        }
        else if (requestname == 'windows') {
            this.router.navigateByUrl('/(outlet1:windowsRequest)', { skipLocationChange: true });
        }
        else if (requestname == 'oke') {
            this.router.navigateByUrl('/(outlet1:okeRequest)', { skipLocationChange: true });
        }
    }
    opendashboard(){
        this.router.navigateByUrl('/(outlet1:activetenancyasset)', { skipLocationChange: true });
    }
    closeRequest() {
        console.log('closed');
    }

    


}






