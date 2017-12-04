import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdvertService} from '../advert.service';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent implements OnInit {

  advert = {
    title:"def",
    description:"def"
  };

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
  }

  createAdvert(form: NgForm){
    this.advert.title = form.value.title;
    this.advert.description = form.value.description;
    //form.setValue(null);
  }

  saveAdvert(){
    this.advertService.postAdvert(this.advert).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

}
