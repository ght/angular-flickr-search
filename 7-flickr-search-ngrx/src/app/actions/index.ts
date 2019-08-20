import { createAction, props } from '@ngrx/store';

import { Photo } from '../models/photo';

export const focusPhoto          = createAction('@app/focusPhoto'         , props<{ photo: Photo }>());
export const search              = createAction('@app/search'             , props<{ searchTerm: string }>());
export const searchResultsLoaded = createAction('@app/searchResultsLoaded', props<{ photos: Photo[] }>());
