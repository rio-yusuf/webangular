import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  getDataFromApi: any = null;
  getTagsFromApi: any = null;
  id: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getDataApi();
  }

  getDataApi() {
    this.api.getData("post").subscribe((res: any) => {
      console.log("res get data?", res);
      if (res.data) {
        this.getDataFromApi = res.data;
      }
    });

    this.api.getData("tag").subscribe((res: any) => {
      console.log("res get data?", res);
      if (res.data) {
        this.getTagsFromApi = res.data;
      }
    });
  }
}
