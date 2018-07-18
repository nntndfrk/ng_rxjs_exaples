import {Component, OnInit} from '@angular/core';
import {from, merge} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>merge()</p>
  `,
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const s1$ = from(['Hello', 'world']);
    const s2$ = from(['Lorem', 'ipsum']);

    merge(s1$, s2$)
      .subscribe(data => console.log(data));
  }

}
