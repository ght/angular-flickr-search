import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { search, searchResultsLoaded } from '../actions';
import { AppState } from '../shared/app-state';
import { SearchService } from '../services/search.service';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService,
  ) {}

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(search),
      mergeMap(({ searchTerm }) =>
        this.searchService.search(searchTerm).pipe(
          map((photos) => searchResultsLoaded({ photos })), // FIXME Does not call reducer
        ),
      ),
    ),
  );
}
