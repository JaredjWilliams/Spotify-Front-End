import { Injectable } from '@angular/core';
import {LoginService} from "./login.service";
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService {

  constructor(
      private loginService : LoginService,
      private router: Router
  ) { }

  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state : RouterStateSnapshot) => {

    if (this.loginService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(["/login"])

    return false;

  }
}
