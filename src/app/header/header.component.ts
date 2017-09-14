import { Component } from '@angular/core';

import { AppComponent } from '../app.component';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private title: string;
  constructor(appComponent: AppComponent, private authService: AuthService){
    this.title = appComponent.title;
  }
  setData(){}
  getData(){}

  logout(){
    this.authService.logout();
  }
}
