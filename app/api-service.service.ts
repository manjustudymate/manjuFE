import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class APIServiceService {
  constructor(private http: HttpClient) {}

  getData(): Promise<any> {
    return this.http
      .get('https://dataapi.mydummymail.repl.co/companyPrice4/all')
      .toPromise();
    //https://jsonplaceholder.typicode.com/todos
    //https://dataapi.mydummymail.repl.co/companyPrice4/all
  }
}
