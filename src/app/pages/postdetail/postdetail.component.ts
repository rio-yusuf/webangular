import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-postdetail",
  templateUrl: "./postdetail.component.html",
  styleUrls: ["./postdetail.component.scss"]
})
export class PostdetailComponent implements OnInit {

  getOneDataFromApi: any = null;
  id: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDataApi();
  }

  getDataApi() {
    this.api.getData("user/" + this.id).subscribe((res: any) => {
      console.log("res get data?", res);
      if (res) {
        this.getOneDataFromApi = res;
      }
    });
  }
}
