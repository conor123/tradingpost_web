import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AdvertService } from './advert.service';
import { ConfigService } from "../config/config.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('AdvertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertService, ConfigService ],
      imports: [HttpModule,RouterTestingModule]
    });
  });

  it('should be created', inject([AdvertService], (service: AdvertService) => {
    expect(service).toBeTruthy();
  }));
});
