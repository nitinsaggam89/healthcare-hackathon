import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sid-nav-list',
  templateUrl: './sid-nav-list.component.html',
  styleUrls: ['./sid-nav-list.component.css']
})
export class SidNavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
 
  constructor(private router: Router) { }
 
  ngOnInit() {
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
    localStorage.removeItem("isLoggedIn");
    this.router.navigate(["login"]);
  }
}
