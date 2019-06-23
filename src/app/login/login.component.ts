import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
username: string;
password: string;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      localStorage.setItem("isLoggedIn", "true");
     this.router.navigate(["dashboard"]);
    }else {
      alert("Invalid credentials");
    }
  }

}
