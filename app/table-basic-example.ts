import { Component } from '@angular/core';
import { APIServiceService } from './api-service.service';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = [
    'company_name',
    'last_value',
    'change',
    'high_value',
    'low_value',
    'mcap',
  ];

  dataSource: any[] = [];

  constructor(private service: APIServiceService) {
    this.service.getData().then((data) => {
      this.dataSource = data;
      console.log(data);
    });
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
