import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdvertsComponent } from './my-adverts.component';
import {AdvertService} from "../advert.service";
import {HttpModule} from "@angular/http";
import {ConfigService} from "../../config/config.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('MyAdvertsComponent', () => {
  let component: MyAdvertsComponent;
  let fixture: ComponentFixture<MyAdvertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdvertsComponent ],
      providers: [AdvertService, ConfigService],
      imports: [HttpModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
