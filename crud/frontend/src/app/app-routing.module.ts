import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/pages/home/home.component';
import { ProductCrudComponent } from './views/pages/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastrar', component: ProductCrudComponent},
  {path: 'products/criar-produto', component: ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
