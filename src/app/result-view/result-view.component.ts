import { Component, OnInit, Input } from '@angular/core';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  @Input() rowData: any;

  constructor(private spinnerService: Ng4LoadingSpinnerService) { console.log('constr'); }

  ngOnInit() { }

  isNumber(val: any) {
    return typeof(val) === 'number';
  }
}
