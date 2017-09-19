import { Component, OnInit } from '@angular/core';
import { AdvertService} from '../advert.service';
import { Response } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',//app-my-adverts
  templateUrl: './my-adverts.component.html',
  styleUrls: ['./my-adverts.component.css']
})
export class MyAdvertsComponent  {
  adverts = [
    {
      title: "lp",
      description: "guitar"
    }
  ];

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
  }

  getAdverts(){
    this.advertService.getAdverts()
      // .map(res => res.json().data)
      .subscribe(
        (response: Response) => {
          const data = response.json();
          let keys = (<any>Object).values(data);
          for(const key of keys){
            this.adverts.push(key);
          }

          return this.adverts;
          // for(const advert of response){
          //   //advert.name =
          // }
          // return this.adverts;
        },

        // (adverts: any[]) => this.adverts = adverts,

        // (res) => res.json(),
        // (response) => console.log(response),

        // (adverts: any[]) => this.adverts = adverts,

        (error) => console.log(error)

    );
  }

}
