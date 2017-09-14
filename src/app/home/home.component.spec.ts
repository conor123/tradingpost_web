import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { AppComponent } from '../app.component';
import { ConfigService } from '../config/config.service';

describe('Component: Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
      providers: [AppComponent, ConfigService]
    });
  })

  it('Should Create Home Component', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Should Contain the Home Heading 1 Text: 'Welcome'`, () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.nativeElement;
    const content = app.querySelector('h1').textContent;
    expect(content).toContain('Welcome');
  });
});

