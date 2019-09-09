import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetaApiService {
   private baseUrl = 'http://149.132.150.72:8081';
  // private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) {}

  searchKeyword(txt: string): any {
    return this.search(txt, 'keyword');
  }
  searchAuthor(txt: string): any {
    return this.search(txt, 'author');
  }
  searchVenue(txt: string): any {
    return this.search(txt, 'venue');
  }

  search(txt: string, searchType: string): any {
    return this.http.get(
      this.baseUrl + '/graphdblp/meta/' + searchType,
      {
      'params': {
        txt: txt
      }}
    );
  }
}
