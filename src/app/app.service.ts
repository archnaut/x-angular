import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
  private greetUrl = 'api/Hello';

  constructor(private http: Http) { }

  sayHello(): Observable<any> {
    return this.http.get(this.greetUrl).map((response: Response) => {
      return response.text();
    });
  }
}
