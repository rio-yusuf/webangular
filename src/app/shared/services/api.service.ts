import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Page } from "../models/page";
import { Sort } from "../models/sort";
import { Observable, throwError } from "rxjs";
import { catchError, timeout, retry, map } from "rxjs/operators";
import * as _ from "lodash";
import { environment } from "src/environments/environment";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getData(
    path: string,
    pagination: Page = null,
    ordering: Sort = null,
    filter: object = null
  ): Observable<any> {
    const params = this.prepareHttpParams(pagination, ordering, filter);
    const options = { params };

    return this.http.get(`${environment.api_url}${path}`, options).pipe(
      catchError(err => {
        return throwError(err);
      }),
      map((res: Response) => {
        return res;
      }),
      timeout(3000),
      retry(3)
    );
  }

  
  private prepareHttpParams(pagination: Page, ordering: Sort, filter: any) {
    let params = new HttpParams();

    if (!_.isEmpty(pagination)) {
      params = params.append("row", pagination.row.toString());
      params = params.append("page", pagination.page.toString());
    }

    if (!_.isEmpty(ordering)) {
      params = params.append("order_type", ordering.order_type);
    }

    if (!_.isEmpty(filter)) {
      for (const key in filter) {
        if (filter.hasOwnProperty(key)) {
          params = params.append(key, filter[key]);
        }
      }
    }

    return params;
  }
}
