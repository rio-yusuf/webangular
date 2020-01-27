import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/shared/services/api.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})


export class AppComponent {
  
  isCollapsed: boolean = true;

}
