import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from '../home/home/home.component';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from '../material/material.module';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    ContactComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    MaterialModule
  ]
})
export class ContactModule { }
