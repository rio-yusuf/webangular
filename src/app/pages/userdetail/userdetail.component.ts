import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-userdetail",
  templateUrl: "./userdetail.component.html",
  styleUrls: ["./userdetail.component.scss"]
})
export class UserdetailComponent implements OnInit {
  getOneDataFromApi: any;
  id: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDataApi();
  }

  getDataApi() {
    this.api.getOneData(this.id).subscribe((res: any) => {
      console.log("res get data?", res);
      if (res) {
        this.getOneDataFromApi = res;
      }
    });
  }
}
