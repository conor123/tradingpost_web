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
  adverts = [];

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
  }

  getAdverts(){
    this.advertService.getAdverts()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          let values = (<any>Object).values(data);
          for(const value of values){
            this.adverts.push(value);
          }
          return this.adverts;
        },
        (error) => console.log(error)

    );
  }

}
