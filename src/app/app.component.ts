import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from 'rxjs';
import {map, mergeAll, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>mergeAll()</p>
  `,
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(
      map(() => interval(500).pipe(take(5))),
    );
    const firstOrder = higherOrder.pipe(
      mergeAll(),
      map(x => x + 1),
    );
    firstOrder.subscribe(x => console.log(x));
  }

}
