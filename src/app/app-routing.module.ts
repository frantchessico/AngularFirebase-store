import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: "", redirectTo: '/products', pathMatch: 'full', canActivate: [AuthGuard] },
  {path: "products", children: [
    {path: "", component: ListProductComponent},
    {path: "add", component: NewProductComponent},
    {path: "edit/:id", component: EditProductComponent},
    {path: "show/:id", component: ShowProductComponent},
  ], canActivate: [AuthGuard]},
  
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
