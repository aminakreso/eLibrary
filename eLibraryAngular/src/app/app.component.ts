import { Component } from '@angular/core';
import { OneTimeLoginComponent } from './login/one-time-login/one-time-login.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eLibraryAngular';
   sideBarOpen = true;
  
 

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
