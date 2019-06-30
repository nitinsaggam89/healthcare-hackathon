import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { ADD_USERID } from '../redux/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
username: string;
password: string;
  constructor(private router: Router, private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {
  }
  
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      localStorage.setItem("isLoggedIn", "true");
      this.ngRedux.dispatch({type: ADD_USERID, payload: 47});
      this.router.navigate(["home/dashboard"]);
    }
    else {
      alert("Invalid credentials");
    }
  }

}
