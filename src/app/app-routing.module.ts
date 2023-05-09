import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavComponent } from './home/nav/nav.component';
import { MatDialogComponent } from './home/mat-dialog/mat-dialog.component';
import { RegisterComponent } from './userctrl/register/register.component';
import { LoginComponent } from './userctrl/login/login.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'' , component:NavComponent
  },
  {
    path:'dialog', component:MatDialogComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login', component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
