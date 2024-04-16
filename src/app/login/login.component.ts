import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = "Invalid Credentials";
  username = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

    handleLogin() {
      console.log(this.username);
      console.log(this.password);
    }

}
