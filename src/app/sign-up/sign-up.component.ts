import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_helper/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   // method to store userData
   registerUserData = new FormGroup ({
     email: new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required]),
   })

  constructor(private _authservice: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  
  registerUser() {
    this._authservice.registerUser(this.registerUserData.value)
    .subscribe(
      res => {
        console.log(res);
        this._router.navigateByUrl('/login');
      },
    )
  }
}
