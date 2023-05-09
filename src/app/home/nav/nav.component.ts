import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RegisterComponent } from 'src/app/userctrl/register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/userctrl/login/login.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  value = 'Clear me';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog) {}
  isalert(type:any){
    alert("Unable to fetch courses right now try again later");
  }

  register(){
    this.dialog.open(RegisterComponent)
  }

  login(){
    this.dialog.open(LoginComponent)
  }
}
