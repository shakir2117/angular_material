import { Component, AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name','period', 'price'];
  dataSource = new MatTableDataSource<Course>(COURSE_DATA);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }

  logData(row:any){
    console.log(row)
  }
  searchcourses(event:Event){
    const Value=(event.target as HTMLInputElement).value
    this.dataSource.filter=Value.trim().toLowerCase();
  }
}
export interface Course {
  position: number;
  name: string;
  price: string;
  period: string;
}
const COURSE_DATA: Course[] = [
  {position: 1, name: 'Angular', price:' 11$', period: '200hrs'},
  {position: 2, name: 'Java', price:' 40$', period: '250hrs'},
  {position: 3, name: 'SQL', price:' 60$', period: '140hrs'},
  {position: 4, name: 'Flutter', price:' 90$', period: '100hrs'},
  {position: 5, name: 'Android Development', price:' 10$', period: '140hrs'},
  {position: 6, name: 'iOS Development', price: '120$', period: '120hrs'},
  {position: 7, name: '.NET', price: '140$', period: '300hrs'},
  {position: 8, name: 'ReactJS', price:' 15$', period: '300hrs'},
  {position: 9, name: 'Node.js', price:' 18$', period: '250hrs'},
  {position: 10, name: 'Python', price:' 25$', period: '200hrs'},
  {position: 11, name: 'Ruby on Rails', price:' 50$', period: '180hrs'},
  {position: 12, name: 'Swift', price:' 80$', period: '150hrs'},
  {position: 13, name: 'C++', price:' 30$', period: '220hrs'},
  {position: 14, name: 'PHP', price:' 20$', period: '180hrs'},
  {position: 15, name: 'JavaScript', price:' 12$', period: '240hrs'},
  {position: 16, name: 'TypeScript', price:' 14$', period: '220hrs'},
  {position: 17, name: 'HTML5', price:' 8$', period: '160hrs'},
  {position: 18, name: 'CSS3', price:' 8$', period: '160hrs'},
  {position: 19, name: 'Bootstrap', price:' 10$', period: '120hrs'},
  {position: 20, name: 'jQuery', price:' 12$', period: '180hrs'},
  {position: 21, name: 'Vue.js', price:' 20$', period: '200hrs'},
  {position: 22, name: 'Ember.js', price:' 30$', period: '220hrs'},
  {position: 23, name: 'Django', price:' 35$', period: '240hrs'},
  {position: 24, name: 'Flask', price:' 25$', period: '180hrs'},
  {position: 25, name: 'Laravel', price:' 45$', period: '300hrs'},
  {position: 26, name: 'Spring Boot', price:' 30$', period: '220hrs'},
  {position: 27, name: 'Hibernate', price:' 25$', period: '200hrs'},
  {position: 28, name: 'Kotlin', price:' 20$', period: '160hrs'},
  {position: 29, name: 'Scala', price:' 40$', period: '240hrs'},
  {position: 30, name: 'Go', price:' 35$', period: '200hrs'},
  {position: 31, name: 'Rust', price:' 50$', period: '180hrs'},
  {position: 32, name: 'Elixir', price:' 45$', period: '220hrs'},
  {position: 33, name: 'Phoenix', price:' 30$', period: '200hrs'},
  {position: 34, name: 'RubyMotion', price:' 60$', period: '240hrs'},
  {position: 35, name: 'Ionic', price:' 20$', period: '160hrs'},
  {position: 36, name: 'Cordova', price:' 15$', period: '120hrs'},
  {position: 37, name: 'PhoneGap', price:' 10$', period: '100hrs'},
  {position: 38, name: 'Xamarin', price:' 50$', period: '220hrs'},
  {position: 39, name: 'Unity', price:' 70$', period: '300hrs'},
  {position: 40, name: 'Unreal Engine', price:' 80$', period: '240hrs'},
  {position: 41, name: 'Blender', price:' 15$', period: '180hrs'},
  {position: 42, name: 'Maya', price:' 25$', period: '200hrs'},
  {position: 43, name: 'Photoshop', price:' 10$', period: '120hrs'},
  {position: 44, name: 'Illustrator', price:' 12$', period: '140hrs'},
  {position: 45, name: 'InDesign', price:' 20$', period: '160hrs'},
  {position: 46, name: 'Premiere Pro', price:' 30$', period: '180hrs'},
  {position: 47, name: 'After Effects', price:' 40$', period: '200hrs'},
  {position: 48, name: 'Final Cut Pro', price:' 50$', period: '220hrs'},
  {position: 49, name: 'Logic Pro', price:' 60$', period: '240hrs'},
  {position: 50, name: 'Pro Tools', price:' 70$', period: '260hrs'},
];


