import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { AppComponent } from '../app.component';
import { AuthService } from "../auth/auth.service";
import { AdvertService } from "../adverts/advert.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title: string;
  constructor(appComponent: AppComponent, public authService: AuthService, private advertService: AdvertService, private http: Http){
    this.title = appComponent.title;
  }
  setData(){}
  getData(){}

  logout(){
    this.authService.logout();
  }
}
