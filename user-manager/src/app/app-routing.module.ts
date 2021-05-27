import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { NoAccessComponent } from './core/components/no-access/no-access.component';
import { AuthGuard } from './core/services/auth/auth-guard.service';
import { LoginComponent } from './modules/login/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    resolve: {
      url: 'externalUrlRedirectResolver'
  },
  data: {
      externalUrl: 'http://localhost:4200/'
  }
  },
  /*{
    path: 'management',
    component: AdminManagementComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },*/
  {
    path: 'no-access',
    component: NoAccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
        provide: 'externalUrlRedirectResolver',
        useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        {
            window.location.href = (route.data as any).externalUrl;
        }
    }
]
})
export class AppRoutingModule { }
