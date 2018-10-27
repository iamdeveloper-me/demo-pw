import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

 

  ngOnInit() {
  }
  @ViewChild('f') loginForm: NgForm;

  constructor(private router: Router,
      private route: ActivatedRoute) { }

  // On submit button click    
  onSubmit() {
      this.loginForm.reset();
  }
  // On Forgot password link click
  onForgotPassword() {
      this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
      this.router.navigate(['register'], { relativeTo: this.route.parent });
  }
}
