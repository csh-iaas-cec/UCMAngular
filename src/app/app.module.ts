import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './_services/material.module';
import { HomeComponent } from './_components/home/home.component';
import { SolutionCatalogComponent } from './_components/solution-catalog/solution-catalog.component';
import { IassAssetComponent } from './_components/solution-catalog/iass-asset/iass-asset.component';
import { PassAssetComponent } from './_components/solution-catalog/pass-asset/pass-asset.component';
import { ImagefilterPipePipe } from './_helpers/imagefilter-pipe.pipe';
import { ServicesMarketplaceComponent } from './_components/services-marketplace/services-marketplace.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import { ReportsBillingComponent } from './_components/reports-billing/reports-billing.component';
import { BestPracticesComponent } from './_components/reports-billing/best-practices/best-practices.component';
import { InventoryComponent } from './_components/reports-billing/inventory/inventory.component';
import { AdminComponent } from './_components/admin/admin.component';
import { AddProductComponent } from './_components/admin/add-product/add-product.component';
import { AddTenancyComponent } from './_components/admin/add-tenancy/add-tenancy.component';
import { DeleteTenancyComponent } from './_components/admin/delete-tenancy/delete-tenancy.component';
import { UpdateTenancyComponent } from './_components/admin/update-tenancy/update-tenancy.component';
import { ActiveTenanciesAssetComponent } from './_components/solution-catalog/iass-asset/active-tenancies-asset/active-tenancies-asset.component';
import { ConfirmDialogComponent } from './_components/solution-catalog/iass-asset/confirm-dialog/confirm-dialog.component';
import { RequestDatabaseComponent } from './_components/solution-catalog/iass-asset/request-database/request-database.component';
import { RequestDialogComponent } from './_components/solution-catalog/iass-asset/request-dialog/request-dialog.component';
import { RequestDialogOkeComponent } from './_components/solution-catalog/iass-asset/request-dialog-oke/request-dialog-oke.component';
import { RequestEsuiteComponent } from './_components/solution-catalog/iass-asset/request-esuite/request-esuite.component';
import { RequestJdeComponent } from './_components/solution-catalog/iass-asset/request-jde/request-jde.component';
import { RequestLinuxComponent } from './_components/solution-catalog/iass-asset/request-linux/request-linux.component';
import { RequestOkeComponent } from './_components/solution-catalog/iass-asset/request-oke/request-oke.component';
import { RequestPeoplesoftComponent } from './_components/solution-catalog/iass-asset/request-peoplesoft/request-peoplesoft.component';
import { RequestSeibelComponent } from './_components/solution-catalog/iass-asset/request-seibel/request-seibel.component';
import { RequestUbuntuComponent } from './_components/solution-catalog/iass-asset/request-ubuntu/request-ubuntu.component';
import { RequestWindowsComponent } from './_components/solution-catalog/iass-asset/request-windows/request-windows.component';
import { MatFileUploadModule } from 'angular-material-fileupload';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolutionCatalogComponent,
    IassAssetComponent,
    PassAssetComponent,
    ImagefilterPipePipe,
    ServicesMarketplaceComponent,
    ReportsBillingComponent,
    BestPracticesComponent,
    InventoryComponent,
    AdminComponent,
    AddProductComponent,
    AddTenancyComponent,
    DeleteTenancyComponent,
    UpdateTenancyComponent,
    ActiveTenanciesAssetComponent,
    ConfirmDialogComponent,
    RequestDatabaseComponent,
    RequestDialogComponent,
    RequestDialogOkeComponent,
    RequestEsuiteComponent,
    RequestJdeComponent,
    RequestLinuxComponent,
    RequestOkeComponent,
    RequestPeoplesoftComponent,
    RequestSeibelComponent,
    RequestUbuntuComponent,
    RequestWindowsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatFileUploadModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [RequestDialogComponent,
    ConfirmDialogComponent,
    RequestDialogOkeComponent]
})
export class AppModule { }
