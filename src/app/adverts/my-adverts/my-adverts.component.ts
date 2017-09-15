import { Component, OnInit } from '@angular/core';
import { AdvertService} from '../advert.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-my-adverts',
  templateUrl: './my-adverts.component.html',
  styleUrls: ['./my-adverts.component.css']
})
export class MyAdvertsComponent implements OnInit {

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
  }

  getAdverts(){
    this.advertService.getAdverts().subscribe(
      (response: Response) => {
        const data = response.json();
      }

    );
  }

}
