import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, timeout, retry, map } from "rxjs/operators";
import * as _ from "lodash";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(
    path: string
  ): Observable<any> {

    return this.http.get(`${environment.api_url}${path}`).pipe(
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
}
