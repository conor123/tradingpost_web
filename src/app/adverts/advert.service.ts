import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { ConfigService } from "../config/config.service";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdvertService {

  adverts = [
    {
      title: "lp",
      description: "guitar"
    }
  ];

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
    return this.http.get(this.config.getApiUrl() + 'data.json')
    //   .map((response: Response) => {
    //     const data = response.json();
    //     for (const advert of data){
    //       this.adverts.push(advert);
    //     }
    //     return this.adverts;
    //   }
    // );
  }
}
