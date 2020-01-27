import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {

  getDataFromApi: any = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getDataApi();
  }

  getDataApi() {
    this.api.getData("user").subscribe((res: any) => {
      console.log("res get data?", res);
      if (res.data) {
        this.getDataFromApi = res.data;
      }
    });
  }
}
