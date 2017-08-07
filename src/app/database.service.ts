/**
 * Created by zak on 7/08/17.
 */

import { Injectable, Input } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class DatabaseService {

  /// REPLACE WITH SPECIFIC URL FROM THE API DEPLOYED ///
  private url = 'https://api.cryptonator.com/api/ticker/omg-usd';

  constructor(private http: Http) {
  }


  getPrice() {
    return this.http.get(this.url).map(res => res.json())
  }
}
