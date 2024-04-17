import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title: String = "angular-whos-who";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.createUser();
  }

  createUser() {
    this.http.post("http://localhost:8080/users", {
      username: "test",
      password: "testing"
    }).subscribe((data) => {
      console.log(data);
    });
  }
}
