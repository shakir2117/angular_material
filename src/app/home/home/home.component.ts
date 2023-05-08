import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showSpinner=false;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.showSpinner= true;
    setTimeout(() =>{
        this.showSpinner = false;
        this.dialog.open(MatDialogComponent, {
          width: '300px',
        })
    }, 2000);
    
  }
}

