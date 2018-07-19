import {Component, OnInit} from '@angular/core';
import {AsyncSubject, interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>AsyncSubject</p>
  `,
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const source$ = new AsyncSubject();

    interval(500)
      .pipe(take(10))
      .subscribe(
        x => {
          source$.next(x);
        },
        null,
        () => {
          source$.complete();
        }
      );

    source$.subscribe(x => console.log('from first subscription - ', x));
    setTimeout(() => {
      source$.subscribe(x => console.log('from second subscription - ', x));
    }, 2000);
  }

}
