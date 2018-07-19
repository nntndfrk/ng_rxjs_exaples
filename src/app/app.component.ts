import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>cold Observable</p>
  `,
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const source$ = interval(500).pipe(take(5));

    source$.subscribe(x => console.log('from first subscription - ', x));
    setTimeout(() => {
      source$.subscribe(x => console.log('from second subscription - ', x));
    }, 2000);
  }

}
