import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { search, searchResultsLoaded, focusPhoto } from './actions';
import { Photo } from './models/photo';
import { AppState } from './shared/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm$: Observable<string>;
  photos$: Observable<Photo[]>;
  currentPhoto$: Observable<Photo | null>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.searchTerm$   = store.pipe(select('searchTerm'));
    this.photos$       = store.pipe(select('photos'));
    this.currentPhoto$ = store.pipe(select('currentPhoto'));
  }

  handleSearch(searchTerm: string) {
    this.store.dispatch(search({ searchTerm }));
  }

  handleFocusPhoto(photo: Photo) {
    this.store.dispatch(focusPhoto({ photo }));
  }
}
