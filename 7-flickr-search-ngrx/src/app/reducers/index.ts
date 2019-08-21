import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import { AppState } from '../shared/app-state';
import { focusPhoto, search, searchResultsLoaded } from '../actions';

export const initialState: AppState = {
  searchTerm: '',
  photos: [],
  currentPhoto: null,
};

export const reducers: ActionReducerMap<AppState> = {
  searchTerm: createReducer(
    initialState.searchTerm,
    on(search, (_, { searchTerm }) => searchTerm),
  ),
  photos: createReducer(
    initialState.photos,
    on(searchResultsLoaded, (_, { photos }) => photos),
  ),
  currentPhoto: createReducer(
    initialState.currentPhoto,
    on(focusPhoto, (_, { photo }) => photo),
    on(search, (..._) => null),
  ),
};
