import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AUTHENTICATED_USER, LoginService} from "../services/login.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  welcomeMessage = this.loginService.isUserLoggedIn() ?  `Welcome to the Yfitops Game ${sessionStorage.getItem(AUTHENTICATED_USER)}!` : "Please login to play the game";
  items = [1,2, 3, 4];
  constructor(
      private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log("Form submitted");
  }

}
