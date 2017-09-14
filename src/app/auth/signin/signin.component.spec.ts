import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from "@angular/forms";

import { SigninComponent } from './signin.component';
import { AppComponent } from '../../app.component';

import { AuthService } from '../auth.service';

describe('Component: Signin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [AppComponent, AuthService]
    });
  })

  it('Should Create Signin Component', () => {
    let fixture = TestBed.createComponent(SigninComponent);
    fixture.detectChanges();

    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Should Contain the header 1 text: 'Login'`, () => {
    let fixture = TestBed.createComponent(SigninComponent);
    let app = fixture.debugElement.nativeElement;
    //fixture.detectChanges();
    let content = app.querySelector('h1').textContent;
    expect(content).toContain('Login');
  });
});


