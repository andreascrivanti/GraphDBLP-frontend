import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MetaApiService {

  constructor(private http: HttpClient, private config: ConfigService) {}

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
      this.config.getBackendEndpoint() + '/graphdblp/meta/' + searchType,
      {
      'params': {
        txt: txt
      }}
    );
  }
}
