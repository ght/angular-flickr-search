import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private http: HttpClient,
  ) {}

  search(searchTerm: string) {
    // Make the JSONP request to Flickr
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const url = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${encodedSearchTerm}&tagmode=all&format=json`;
    return this.http.jsonp(url, 'jsoncallback').pipe(
      map((data: any) => data.items),
    );
  }
}
