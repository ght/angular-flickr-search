import { Photo } from '../models/photo';

export type SearchTerm = string;

export interface AppState {
  searchTerm: SearchTerm;
  photos: Photo[];
  currentPhoto: Photo | null;
}
