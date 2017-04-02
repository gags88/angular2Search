import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http : Http) {}

  /*search(term : string, limit : number = 10, page : number = 1) {
    const API = "https://jsonplaceholder.typicode.com/posts/";
    return this
      .http
      .get(API)
      .map(res => res.json());
  }*/

  /* debounceTime waits until there’s no new data for the provided amount of time (400ms in this case) until it lets the next data through. distinctUntilChanged will ensure that only distinct data passes through. If the user types something, erases a character quickly and then types back the same character, distinctUntilChanged will only send the data once. Finally, switchMap combines multiple possible observables received from the searchEntries method into one, which ensures that we use the results from the latest request only. */

  /*search(terms : Observable < string >) {

    return terms
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));

  }*/

  searchEntries(term) {

    const API = "https://jsonplaceholder.typicode.com/posts/1";

    return this
      .http
      .get(API)
      .map(res => res.json());
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
