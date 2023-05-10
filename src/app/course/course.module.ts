import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { MaterialModule } from '../material/material.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeModule
]
})
export class CourseModule { }
