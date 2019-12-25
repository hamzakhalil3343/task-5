import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BookyConfig } from '../custom/booky.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public getAllBooks(): Observable<any> {
    const url = BookyConfig.getPath() + '/books';

    return this.http.get(url);
  }
}