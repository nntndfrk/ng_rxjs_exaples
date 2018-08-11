import {Component, OnInit} from '@angular/core';
import {Observable, interval, merge, of, from, range} from 'rxjs';
import {map, take, pluck, findIndex, find} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>Pipeable Operators</p>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit() {

    // pluck
    // const observable = from([
    //   {id: 1, user: {name: 'Alex', lname: 'Smith'}},
    //   {id: 2, user: {name: 'John', lname: 'Doe'}}
    // ])
    // .pipe(
    //     pluck('user', 'name'),
    //     map(name => name.toString().toUpperCase())
    // )

    // map
    // const observable = interval(1500).pipe(
    //   map(item => {
    //     return item + '-item';
    //   })
    // );
    // const observable = from([1, 2, 3, 4, 5]).pipe(
    //   map(item => {
    //     return item * 4;
    //   })
    // );

    // find, findIndex
    const observable = from([1, 2, 3, 4, 5]).pipe(
      map(item => {
        return item + ' Find';
      }),
      find(x => x === '4 Find')
    );

    const subscription = observable.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('Complete.')
    );
  }

}
