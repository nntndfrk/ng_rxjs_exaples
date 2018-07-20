import {Component, OnInit} from '@angular/core';
import {Observable, interval, merge, of, from, range} from 'rxjs';
import {map, take} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>forkJoin()</p>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit() {

    // const observable = Observable.create((observer) => {
    //   observer.next('Hello');
    //   observer.next('our');
    //   setTimeout(() => {
    //     observer.next('World');
    //     observer.complete();
    //   }, 2000);
    // });
    // const observable = of('first', 1, 2, 3, 4, 'last');
    const observable = interval(1500).pipe(
      map(item => {
        return item + '-item';
      })
    );
    // const observable = from([1, 2, 3, 4, 5, {}]);
    // const observable = range(5,10);

    const subscription = observable.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('Complete.')
    );
  }

}
