import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from '../material/material.module';
import { EllipsesPipe } from '../ellipses.pipe';



@NgModule({
  declarations: [
    AboutComponent,
    EllipsesPipe
  ],
  imports: [
    CommonModule,
    HomeModule,
    MaterialModule
  ]
})
export class AboutModule { }
