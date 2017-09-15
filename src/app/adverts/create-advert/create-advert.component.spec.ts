import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CreateAdvertComponent } from './create-advert.component';
import { AdvertService} from '../advert.service';
import { ConfigService } from "../../config/config.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('CreateAdvertComponent', () => {
  let component: CreateAdvertComponent;
  let fixture: ComponentFixture<CreateAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdvertComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [AdvertService, ConfigService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
