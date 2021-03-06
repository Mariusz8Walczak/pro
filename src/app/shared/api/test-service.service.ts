import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private httpClient: HttpClient) { }

  public getGoogle() {
    return this.httpClient.get('url');
  }
}
