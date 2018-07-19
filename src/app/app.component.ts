import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {map, mergeMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>mergeMap()</p>
  `,
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const s1$ = interval(1000).pipe(take(3));
    const s2$ = interval(500).pipe(take(3));

    // s1$.subscribe(s1Value => {
    //   s2$.subscribe(s2Value => {
    //     console.log(`s1Value - ${s1Value} : s2Value - ${s2Value}`);
    //   });
    // });

    s1$.pipe(mergeMap((s1Value) => {
          return s2$.pipe(map(s2Value => `s1Value - ${s1Value} : s2Value - ${s2Value}`));
        }))
      .subscribe(x => console.log(x));
  }

}
