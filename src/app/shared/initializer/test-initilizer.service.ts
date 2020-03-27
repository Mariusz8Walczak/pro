import { Injectable }  from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TestInitilizerService {

  constructor(private http: HttpClient) {
  }

  appInitCosTam() {
    console.log('service');
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1');
  }
}
