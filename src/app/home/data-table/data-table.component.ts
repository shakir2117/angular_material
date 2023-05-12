import { Component } from '@angular/core';

export interface Course {
  position: number;
  name: string;
  price: number;
  period: string;
}
const ELEMENT_DATA: Course[] = [
  {position: 1, name: 'Angular', price: 11, period: '200hrs'},
  {position: 2, name: 'java', price: 40, period: '250hrs'},
  {position: 3, name: 'SQL', price: 60, period: '140hrs'},
  {position: 4, name: 'flutter', price: 90, period: '100hrs'},
  {position: 5, name: 'android dev', price: 10, period: '140hrs'},
  {position: 6, name: 'ios dec', price: 120, period: '120hrs'},
  {position: 7, name: '.Net', price: 140, period: '300hrs'},
  {position: 8, name: 'Reactjs', price: 15, period: '300hrs'},
  {position: 9, name: 'Nodejs', price: 18, period: '250hrs'},
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  displayedColumns: string[] = ['position', 'name', 'price', 'period'];
  dataSource = ELEMENT_DATA;
}
