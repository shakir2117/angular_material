import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { UserctrlModule } from '../userctrl/userctrl.module';
import { DataTableComponent } from './data-table/data-table.component';







@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavComponent,
    MatDialogComponent,
    DataTableComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    UserctrlModule,  ],
  exports:[
    NavComponent,
    FooterComponent,
  ]
})
export class HomeModule { }
