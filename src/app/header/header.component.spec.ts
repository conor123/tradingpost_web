import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { AppComponent } from '../app.component';
import { ConfigService } from '../config/config.service';
import { AuthService } from "../auth/auth.service";

describe('Component: Header', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
      providers: [AppComponent, ConfigService, AuthService]
    });
  })

  it('Should Create Header Component', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Should Contain the Nav Brand: 'Angular Auth'`, () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    let content = app.querySelector('a').textContent;
    expect(content).toContain('Angular Auth');
  });
});


