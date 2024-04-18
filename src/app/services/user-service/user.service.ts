import { Injectable } from '@angular/core';
import {LoginService} from "../login-service/login.service";
import {HttpClient} from "@angular/common/http";

const urlBase = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private loginService: LoginService,
      private http: HttpClient
  ) { }

  saveScore(attempt: any) {
    return this.http.post(`http://localhost:8080/attempts`, attempt)
  }

  getLeaderBoard(n: number) {
    return this.http.get(`${urlBase}/users/leaderboard/${n}`)
  }

  patchSettings(settings: any) {
    const settingsRequest = {
      credentials : {
        username: this.loginService.getAuthenticatedUser(),
        password: 'password'
      },
      settings
    }
    return this.http.patch(`${urlBase}/users/settings`, settingsRequest)
  }
}
