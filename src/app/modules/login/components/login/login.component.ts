import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:'';
  password:'';

  sw = true;
  
  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  OnLogin(){
    console.log('Username: ', this.username);
    console.log('Password: ',this.password);
  }

  OnLogin2(form){
    console.log('Variable Local', form);
    this.router.navigate(['pages']);
  }
}