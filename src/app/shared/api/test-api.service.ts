import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  private url = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  public getGood(){
    return this.httpClient.get(this.url);
  }

  public getRedirect(){
    return this.httpClient.get(this.url + '/test1');
  }

  public getBadRequest(){
    return this.httpClient.get(this.url + '/test2');
  }

  public getNotFound(){
    return this.httpClient.get(this.url + '/test3');
  }

  public getError(){
    return this.httpClient.get(this.url + '/test4');
  }

  public getUnavailible(){
    return this.httpClient.get(this.url + '/test5');
  }
}
