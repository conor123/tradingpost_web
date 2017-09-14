import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService){}

  signup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signup(email,password);
  }

  ngOnInit(){}
}

