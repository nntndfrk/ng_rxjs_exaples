import {Component, OnInit} from '@angular/core';
import {interval, merge} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>merge()</p>
  `,
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const stream1$ = interval(500)
      .pipe(
        map(x => 'from stream1 ' + x),
        take(5)
      );
    const stream2$ = interval(1000)
      .pipe(
        map(x => 'from stream2 ' + x),
        take(5)
      );

    merge(stream1$, stream2$)
      .subscribe(data => console.log(data));
  }

}
