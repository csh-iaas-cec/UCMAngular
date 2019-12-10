import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CloudPortalService {
  ROOT_URL : any;
  localhost_URL : any;

  constructor(public http: HttpClient) {
    console.log('Hello TerraformPvrProvider Provider');
    this.localhost_URL = 'http://localhost:3200';
   }
   runScriptsinit(instance):  Observable<any>  {
    return this.http.post(`${this.localhost_URL}/api/RunScriptsInit`, instance);
  }

  runScriptsapply():  Observable<any>  {
    return this.http.post(`${this.localhost_URL}/api/RunScriptsApply`, {});
  }

  runScriptsdestroy(instance):  Observable<any>  {
    return this.http.post(`${this.localhost_URL}/api/RunScriptsDestroy`, instance);
  }

  initializeScripts(scripts):  Observable<any>  {
    console.log('transfer product', scripts);
    return this.http.post(`${this.localhost_URL}/api/InitializeScripts`, scripts);

  }

  getActiveInstances():  Observable<any>  {

    console.log('Active Instances');

    return this.http.get(`${this.localhost_URL}/api/getActiveInstances`);

  }

  getSecurityLists(tenancyname):  Observable<any>  {
    console.log('getting security list');
    return this.http.get(`${this.localhost_URL}/api/getSecurityListsfromPython?tenancyname=${tenancyname}`);

  }


  getAllTenancies():  Observable<any>  {

    console.log("All tenancies")

    return this.http.get(`${this.localhost_URL}/api/getAllTenancies`);

  }


    getActiveTenancies():  Observable<any>  {

    console.log("Active Tenancies")

    return this.http.get(`${this.localhost_URL}/api/getOnlyActiveTenancies`);

  }
  getActiveTenancyReports():  Observable<any>  {

    console.log("Active Reports")

    return this.http.get(`${this.localhost_URL}/api/getAllTenancyReports`);

  }

  
  
  getTenancyDetailsById(id):  Observable<any>  {

    console.log("Active Tenancies details by id")

    return this.http.get(`${this.localhost_URL}/api/getTenancyDetailsById?id=${id}`);

  }
  
   updateTenancyDetailsById(id):  Observable<any>  {

    console.log("update tenancy by id")

    return this.http.post(`${this.localhost_URL}/api/updateTenancyDetailsById`, id);

  }

  
  
  addTenancyDetailsById(id):  Observable<any>  {

    console.log("Adding You new Tenancy ")

    return this.http.post(`${this.localhost_URL}/api/addTenancyDetailsById`, id);

  }

  summarycountByID(id, date1):  Observable<any>  {

    console.log("Adding You new Tenancy ")

    return this.http.get(`${this.localhost_URL}/api/summarycountByID?id=${id}&date=${date1}`);

  }
  
  
  getInstanceTable(instanceparams):  Observable<any>  {

    console.log("get table details", instanceparams)

    return this.http.get(`${this.localhost_URL}/api/getTableDetailsForCompute?name=${instanceparams.name}&reportdate=${instanceparams.reportdate}&tenancyname=${instanceparams.tenancyname}`);

  }

  runScriptsforServiceAutomation(jsonData, task): Observable<any> {
    
    console.log('Running scripts for service sutomation');
    
    return this.http.post(`${this.localhost_URL}/api/runPythonForServiceAutomation?task=${task}`, jsonData);
  }

  deleteZipFolder(foldername): Observable<any> {
    
    console.log('Running scripts for service automation',foldername);
    
    return this.http.get(`${this.localhost_URL}/api/deleteZipFolder?filename=${foldername}`);
  }
  
  getmporderformdata(id) : Observable<any>{

    console.log ('Calling server for Order data');

    return this.http.get(`${this.localhost_URL}/api/getmporderformDataByTenancy?id=${id}`);

  }

  

}
