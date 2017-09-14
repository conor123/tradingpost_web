import { Component } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private title: string;
  constructor(appComponent: AppComponent){
    this.title = appComponent.title;
  }
}
