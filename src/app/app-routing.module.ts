import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { UserComponent } from "./pages/user/user.component";
import { UserdetailComponent } from "./pages/userdetail/userdetail.component";
import { PostdetailComponent } from "./pages/postdetail/postdetail.component";
import { UserpostComponent } from "./pages/userpost/userpost.component";
import { PosttagsComponent } from "./pages/posttags/posttags.component";
import { PostcommentComponent } from "./pages/postcomment/postcomment.component";


const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "user/:id", component: UserdetailComponent },
  { path: "user/:id/post", component: UserpostComponent },
  { path: "post/:id", component: PostdetailComponent },
  { path: "post/:id/comment", component: PostcommentComponent },
  { path: "tag/:id/post", component: PosttagsComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
