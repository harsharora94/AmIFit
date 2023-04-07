import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service'

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

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private loginServiceService: LoginServiceService) { }

  ngOnInit(): void {

  }

  onSubmit = () => {
    const status = this.loginServiceService.login(this.loginForm.controls.userName.value, this.loginForm.controls.password.value);
    console.log(status);
    if (!status) {
      const returnUrl = this.route.snapshot.queryParams['login'] || '/'
    }
    else {
      this.router.navigate(['dashboard']);
    }
  }

}
