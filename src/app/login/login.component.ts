import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login-service/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = "Invalid Credentials";
  username = "";
  password: string = "";
  invalidLogin = false;

  constructor(
      private loginService: LoginService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

    handleLogin() {
      this.loginService.getUser(this.username).subscribe({
        next: response => {
          console.log(response)
          sessionStorage.setItem("authenticatedUser", this.username);
          this.router.navigate(["home", this.username]);
        },
        error: error => {
            this.invalidLogin = true;
          console.log(error.message)
        },
        complete: () => {
          console.log("completed")
        }
      });
    }
}
