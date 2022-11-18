import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductComponent } from './product/product.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path : 'first',component : FirstComponent},
  {path : 'second',component : SecondComponent},
  {path : 'products',component : ProductComponent},
  {path : 'products/:id',component : ProductdetailComponent},
  {path : "",redirectTo:'first',pathMatch:'full'},
  {path : '**' , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
