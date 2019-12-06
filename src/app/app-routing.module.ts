import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IassAssetComponent } from '../app/_components/solution-catalog/iass-asset/iass-asset.component';
import { PassAssetComponent } from '../app/_components/solution-catalog/pass-asset/pass-asset.component';
import { RequestEsuiteComponent } from '../app/_components/solution-catalog/iass-asset/request-esuite/request-esuite.component';
import { RequestJdeComponent } from '../app/_components/solution-catalog/iass-asset/request-jde/request-jde.component';
import { RequestPeoplesoftComponent } from '../app/_components/solution-catalog/iass-asset/request-peoplesoft/request-peoplesoft.component';
import { RequestSeibelComponent } from '../app/_components/solution-catalog/iass-asset/request-seibel/request-seibel.component';
import { RequestDatabaseComponent } from '../app/_components/solution-catalog/iass-asset/request-database/request-database.component';
import { RequestLinuxComponent } from '../app/_components/solution-catalog/iass-asset/request-linux/request-linux.component';
import { RequestWindowsComponent } from '../app/_components/solution-catalog/iass-asset/request-windows/request-windows.component';
import { RequestUbuntuComponent } from '../app/_components/solution-catalog/iass-asset/request-ubuntu/request-ubuntu.component';
import { RequestOkeComponent } from '../app/_components/solution-catalog/iass-asset/request-oke/request-oke.component';
import { ActiveTenanciesAssetComponent } from '../app/_components/solution-catalog/iass-asset/active-tenancies-asset/active-tenancies-asset.component';
import { SolutionCatalogComponent } from '../app/_components/solution-catalog/solution-catalog.component';
import { AddTenancyComponent } from '../app/_components/admin/add-tenancy/add-tenancy.component';
import { UpdateTenancyComponent } from '../app/_components/admin/update-tenancy/update-tenancy.component';
import { DeleteTenancyComponent } from '../app/_components/admin/delete-tenancy/delete-tenancy.component';
import { AddProductComponent } from '../app/_components/admin/add-product/add-product.component';

const appRoutes: Routes = [
  { path: '', component: IassAssetComponent, outlet: 'outlet1'   },
  { path: 'iassAsset', component: IassAssetComponent, outlet: 'outlet1' },
  { path: 'PassAsset', component: PassAssetComponent, outlet: 'outlet1' },
  { path: 'jdeRequest', component: RequestJdeComponent, outlet: 'outlet1' },
  { path: 'ebsRequest', component: RequestEsuiteComponent, outlet: 'outlet1' },
  { path: 'psoftRequest', component: RequestPeoplesoftComponent, outlet: 'outlet1' },
  { path: 'siebelRequest', component: RequestSeibelComponent, outlet: 'outlet1' },
  { path: 'databaseRequest', component: RequestDatabaseComponent, outlet: 'outlet1' },
  { path: 'linuxRequest', component: RequestLinuxComponent, outlet: 'outlet1' },
  { path: 'windowsRequest', component: RequestWindowsComponent, outlet: 'outlet1' },
  { path: 'ubuntuRequest', component: RequestUbuntuComponent, outlet: 'outlet1' },
  { path: 'okeRequest', component: RequestOkeComponent, outlet: 'outlet1' },
  { path: 'activetenancyasset', component: ActiveTenanciesAssetComponent,  outlet: 'outlet1' },
  { path: 'Solutions', component: SolutionCatalogComponent },
  { path: 'Addtenancy', component: AddTenancyComponent,  outlet: 'outlet2' },
  { path: 'Updatetenancy', component: UpdateTenancyComponent,  outlet: 'outlet2' },
  { path: 'Deletetenancy', component: DeleteTenancyComponent,  outlet: 'outlet2' },
  { path: 'Addproduct', component: AddProductComponent,  outlet: 'outlet2' },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
