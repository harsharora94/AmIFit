import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.router.navigate(['dashboard']);
  } 

}
