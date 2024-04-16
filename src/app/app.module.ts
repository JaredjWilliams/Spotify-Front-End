import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GamePageComponent } from './game-page/game-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home/:name", component: HomeComponent },
    { path: "login", component: LoginComponent },
];

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      GamePageComponent,
      LoginComponent
  ],
  imports: [
      BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
