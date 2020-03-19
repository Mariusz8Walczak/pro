import {ApplicationRef, Component, OnDestroy, OnInit} from '@angular/core';
import {TestServiceService} from '../../shared/api/test-service.service';

@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.sass']
})
export class HomepageContainerComponent implements OnInit, OnDestroy {

  private sub;
  constructor(private appRef: ApplicationRef, private testService: TestServiceService) { }

  ngOnInit() {
    this.sub = this.testService.getGoogle().subscribe(() => {
      console.log('jest');
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
