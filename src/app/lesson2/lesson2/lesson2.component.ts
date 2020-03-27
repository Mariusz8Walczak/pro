import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {count, debounce, debounceTime, filter, map, mapTo, reduce} from 'rxjs/operators';
import {interval, merge, of, timer} from 'rxjs';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.sass']
})
export class Lesson2Component implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.reduceExample();
    // this.mergeExample();
    //this.debounceExample();
  }

  getDataExample() {
   return  this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1');
  }

  reduceExample() {
    const source = of(1, 2, 3, 4);
    const example = source.pipe(
      reduce((acc, val) => acc * val)
    )
    const subscribe = example.subscribe(val => console.log('Suma:', val));
  }

    mergeExample() {
      const source = of(1, 2, 3, 4);
      const example = merge(
        source.pipe(map(x => x * 2)),
        source.pipe(map(x => x + 1)),
        source.pipe(map(x => x * x)),
        source.pipe(
          map(x => x * x),
          reduce((acc, x) => acc - x)
          )
      ).pipe(
        filter(x => x > 3)
      );
      const subscribe = example.subscribe(val => console.log(val));
    }

    debounceExample() {

      const source = of(1, 2, 3, 4);
      const debouncedExample = source.pipe(debounce(() => timer(1000)));

      const subscribe = debouncedExample.subscribe(val => console.log(val));
    }
}





// 6. debounce/debouncetime
