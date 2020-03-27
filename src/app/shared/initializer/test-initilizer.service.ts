import { Injectable }  from '@angular/core';

@Injectable()
export class TestInitilizerService {

  constructor() {
  }

  Init() {
    console.log('service');
  }
}
