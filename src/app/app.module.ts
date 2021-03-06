import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { CollapseModule, BsDropdownModule } from "ngx-bootstrap";

import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UserdetailComponent } from './pages/userdetail/userdetail.component';
import { PostdetailComponent } from './pages/postdetail/postdetail.component';
import { UserpostComponent } from './pages/userpost/userpost.component';
import { PosttagsComponent } from './pages/posttags/posttags.component';
import { PostcommentComponent } from './pages/postcomment/postcomment.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomeComponent, UserComponent, UserdetailComponent, PostdetailComponent, UserpostComponent, PosttagsComponent, PostcommentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
