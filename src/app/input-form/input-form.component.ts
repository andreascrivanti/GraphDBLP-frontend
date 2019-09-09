import { Component, OnInit } from '@angular/core';

import { GraphdblpApiService } from '../graphdblp-api.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError } from 'rxjs/operators';
import { MetaApiService } from '../meta-api.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  queryResults: any;
  keywordLoading = false;
  authorLoading = false;
  venueLoading = false;

  constructor(private service: GraphdblpApiService, private spinnerService: Ng4LoadingSpinnerService,
    private metaService: MetaApiService) { }

  ngOnInit() {
  }

  executeQuery(queryNumber: number, params: any) {
    this.spinnerService.show();
    this.service.executeQuery(queryNumber, params).subscribe(
      data => {
        console.log('JSON result ' + JSON.stringify(data));
        this.queryResults = data;
        this.spinnerService.hide();
      }
    );
  }

  simpleStringFormatter = (item: any) => item.name;

  searchKeyword = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    tap(() => this.keywordLoading = true),
    switchMap(term =>
      this.metaService.searchKeyword(term).pipe(
        catchError(() => {
          // this.searchFailed = true;
          return of([]);
        }))
      ),
      tap(() => this.keywordLoading = false)
  )
  searchAuthor = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    tap(() => this.authorLoading = true),
    switchMap(term =>
      this.metaService.searchAuthor(term).pipe(
        catchError(() => {
          // this.searchFailed = true;
          return of([]);
        }))
      ),
      tap(() => this.authorLoading = false)
  )
  searchVenue = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    tap(() => this.venueLoading = true),
    switchMap(term =>
      this.metaService.searchVenue(term).pipe(
        catchError(() => {
          // this.searchFailed = true;
          return of([]);
        }))
      ),
      tap(() => this.venueLoading = false)
  )
}
