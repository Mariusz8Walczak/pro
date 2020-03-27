import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {of, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.sass']
})
export class HeroComponentComponent implements OnInit, OnDestroy {

  @Input() test;
  private stopSignal = new Subject();

  constructor() { }

  ngOnInit() {
    const observableArray = of(
      {name: 'Agnieszka', age: 18},
      {name: 'Dorota', age: 19},
      {name: 'Hanna', age: 24},
    );

    observableArray.pipe(
      tap((x) => {
        this.test.push(x);
      }),
      takeUntil(this.stopSignal)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.stopSignal.next();
    this.stopSignal.complete();
  }

}
