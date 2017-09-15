import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { ConfigService } from "../config/config.service";

@Injectable()
export class AdvertService {

  constructor(private http: Http, private config: ConfigService) {}

  postAdvert(advert: any){
    const headers = new Headers({
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    return this.http.post(
      this.config.getApiUrl() + 'data.json',
      advert,
      {headers: headers});
  }

  getAdverts(){
    return this.http.get(
      this.config.getApiUrl() + 'data.json'
    );
  }
}
