import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:'';
  password:'';

  sw = true;
  
  constructor(private router: Router, private authService: AuthService) { 
  }

  ngOnInit() {
  }

  onLogin(form : any){
    console.log('Form',form.value);
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        console.log('Login Response', res);
        this.router.navigate(['pages']);
      },
      err=>{
        console.log('Login ERROR' );
      }
    );
  }

  OnLogin2(form){
    console.log('Variable Local', form);
    this.router.navigate(['pages']);
  }
}