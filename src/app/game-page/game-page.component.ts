import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  items = [1,2, 3, 4];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log("Form submitted");
  }

}
