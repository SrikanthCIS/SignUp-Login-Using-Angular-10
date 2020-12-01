import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor (private _authservice: AuthService, private _router: Router){}
  canActivate(): boolean {
    if(this._authservice.getToken()){
      return true;
    } else {
      alert('Wrong E-Mail or Password')
      this._router.navigate(['/login'])
      
      return false;
    }
  }
  
}
