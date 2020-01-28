import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-postcomment",
  templateUrl: "./postcomment.component.html",
  styleUrls: ["./postcomment.component.scss"]
})
export class PostcommentComponent implements OnInit {
  getDataFromApi: any = null;
  getOneDataFromApi: any = null;
  id: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDataApi();
  }

  getDataApi() {
    this.api.getData("post/" + this.id + "/comment").subscribe((res: any) => {
      console.log("res get data?", res);
      if (res.data) {
        this.getDataFromApi = res.data;
      }
    });

    this.api.getData("post/" + this.id).subscribe((res: any) => {
      console.log("res get data?", res);
      if (res) {
        this.getOneDataFromApi = res;
      }
    });
  }
}