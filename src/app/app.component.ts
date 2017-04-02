import {Component} from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
import 'rxjs/Rx';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})

export class AppComponent {

  resp : any[] = [];
  counter : number = 0;
  searchTerm = new Subject < string > ();

  constructor(private _searchService : AppService) {
    // this   ._searchService   .search(this.searchTerm)   .subscribe(results => {
    // this.resp = this       .resp       .concat(results);   });

  }

  searchNow(term : string) {
    term.length > 2
      ? this
        ._searchService
        .searchEntries(term)
        .debounceTime(1000)
        .distinctUntilChanged()
        .switchMap(results => {
          return this
            ._searchService
            .searchEntries(results);
        })
        .subscribe((results) => this.resp = this.resp.concat(results))
      : "";
  }

  /*return this
      ._searchService
      .search(term)
      .subscribe(data => this.resp = data)*/
}
