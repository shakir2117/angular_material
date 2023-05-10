import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeModule } from '../home/home.module';
import { FooterComponent } from '../home/footer/footer.component';
import { NavComponent } from '../home/nav/nav.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    MaterialModule
  ]
})
export class AboutModule { }
