import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarLeftComponent } from './Components/navbar/navbar-left/navbar-left.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { FriendsListComponent } from './Components/friends-list/friends-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NavbarLeftComponent,
    HomeComponent,
    SettingsComponent,
    FriendsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
