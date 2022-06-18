import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginGuard } from './services/auth/login.guard';
import { PortfolioGuard } from './services/auth/portfolio.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent, canActivate:[PortfolioGuard]},
  {path:'login', component:LoginComponent, canActivate:[LoginGuard]},
  {path:'', redirectTo:'portfolio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
