import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AutosComponent } from './autos/autos.component';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
  path:'login',
  component:LoginComponent
},

{
  path:'home',
  component:HomeComponent
},

{
  path:'autos',
  component:AutosComponent
},
{
  path:'autos/:id',
  component:AutosComponent
},
{
  path:'list',
  component:ListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
