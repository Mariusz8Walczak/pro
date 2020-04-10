import { Component, OnInit } from '@angular/core';
import {TestApiService} from '../../shared/api/test-api.service';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.sass']
})
export class Lesson3Component implements OnInit {

  constructor(private testApiService: TestApiService) { }

  ngOnInit() {
    // this.testApiService.getBadRequest().subscribe();
    this.testApiService.getError().subscribe();
    // this.testApiService.getGood().subscribe(data => console.log(data));
    // this.testApiService.getRedirect().subscribe();
    // this.testApiService.getUnavailible().subscribe();
  }

}
