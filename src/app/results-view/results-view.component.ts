import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.css']
})
export class ResultsViewComponent implements OnInit {

  @Input() tableData: any;

  constructor() { }

  ngOnInit() {
  }



}
