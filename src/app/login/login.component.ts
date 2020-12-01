import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../_helper/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = new FormGroup ({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  constructor(private _authservice:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser() {
    this._authservice.loginUser(this.loginUserData.value)
    .subscribe (
      res => {
        console.log(res);
        this._router.navigateByUrl('/home');
      }
    )
  }
}
