import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicareComponent } from './medicare/medicare.component';
import { AboutComponent } from './about/about.component';
import { AntipireticsComponent } from './antipiretics/antipiretics.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RsuccessComponent } from './rsuccess/rsuccess.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DisableProductComponent } from './disable-product/disable-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicareComponent,
    AboutComponent,
    AntipireticsComponent,
    RegisterComponent,
    LoginComponent,
    ContactsComponent,
    ProductsComponent,
    PaymentComponent,
    PaymentStatusComponent,
    AdminComponent,
    AdminProductsComponent,
    AddProductComponent,
    RsuccessComponent,
    UpdateProductComponent,
    DisableProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* HttpClient, */
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
