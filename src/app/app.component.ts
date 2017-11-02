import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config/config.service';

import * as firebase from 'firebase';
import { AdvertService } from "./adverts/advert.service";
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular Auth';
  apiKey;
  apiDomain;

  constructor(private config: ConfigService, private advertService: AdvertService, private http: Http ){
    this.apiKey = config.getApiKey(),
    this.apiDomain = config.getApiDomain()
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: this.apiKey,
      authDomain: this.apiDomain
    });
  }
}
