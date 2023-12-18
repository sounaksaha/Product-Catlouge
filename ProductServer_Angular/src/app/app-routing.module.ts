import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AuthenticationGuard } from './guards/authenticated.guard';
import { RoleGuard } from './guards/role.guard';
import { ROLE } from './role';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('../app/authentication/authentication.module').then(module => module.AuthenticationModule)
  },
  {
    path:"admin",
    loadChildren: () => import('../app/admin/admin.module').then(module => module.AdminModule),
    canActivate:[AuthenticationGuard, RoleGuard], 
    data: {expectedRole: ROLE.ADMIN}
  },
  {
    path: "user",
    loadChildren: () => import('../app/user/user.module').then(module => module.UserModule),
    canActivate:[AuthenticationGuard, RoleGuard], 
    data: {expectedRole: ROLE.USER}
  },
  {
    path:"**",
    component:ErrorpageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
