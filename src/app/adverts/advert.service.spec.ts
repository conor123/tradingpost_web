import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AdvertService } from './advert.service';
import { ConfigService } from "../config/config.service";
import { Router } from '@angular/router';

describe('AdvertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertService, ConfigService, Router],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([AdvertService], (service: AdvertService) => {
    expect(service).toBeTruthy();
  }));
});
