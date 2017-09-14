// Rename to config.service.ts and add config info
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private apiKey = '';
  private apiDomain = '';

  constructor() {}

  getApiKey() {
    return this.apiKey;
  }

  getApiDomain() {
    return this.apiDomain;
  }

};
