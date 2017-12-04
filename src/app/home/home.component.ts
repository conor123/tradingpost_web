import { Component } from '@angular/core';
import { Http } from "@angular/http";

import { AppComponent } from '../app.component';
import { AdvertService } from "../adverts/advert.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title: string;
  constructor(private appComponent: AppComponent, private advertService: AdvertService, private http: Http){
    this.title = appComponent.title;
  }
}
