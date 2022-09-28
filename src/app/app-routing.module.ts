import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminComponent } from './admin/admin.component';
import { AntipireticsComponent } from './antipiretics/antipiretics.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DisableProductComponent } from './disable-product/disable-product.component';
import { LoginComponent } from './login/login.component';
import { MedicareComponent } from './medicare/medicare.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RsuccessComponent } from './rsuccess/rsuccess.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path:'medicare',component:MedicareComponent
  },
  { 
     path:'about',component:AboutComponent
},
  {
    path:'contacts',component:ContactsComponent
  },
  {
    path:'antip',component:AntipireticsComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'viewProducts',component:ProductsComponent
  },
  {
    path:'payment',component:PaymentComponent
  },
  {
    path:'paymentStatus',component:PaymentStatusComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'adminProducts',component:AdminProductsComponent
  },
  {
    path:'addProduct',component:AddProductComponent
  },
  {
    path:'rsuccess',component:RsuccessComponent
  },
  {
    path:'updateProduct',component:UpdateProductComponent
  },
  {
    path:'disableProduct',component:DisableProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
