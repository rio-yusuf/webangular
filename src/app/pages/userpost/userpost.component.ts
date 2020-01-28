import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-userpost",
  templateUrl: "./userpost.component.html",
  styleUrls: ["./userpost.component.scss"]
})
export class UserpostComponent implements OnInit {
  getDataFromApi: any = null;
  id: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDataApi();
  }

  getDataApi() {
    this.api.getData("user/" + this.id + "/post").subscribe((res: any) => {
      console.log("res get data?", res);
      if (res.data) {
        this.getDataFromApi = res.data;
      }
    });
  }
}
