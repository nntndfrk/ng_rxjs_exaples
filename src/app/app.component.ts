import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>forkJoin()</p>
  `,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    const dataStream = forkJoin(
      this.http.get('./assets/data-1.json'),
      this.http
        .get('./assets/data-2.json')
        .pipe(
          delay(2000) // эмуляция задержка ответа на 2 секунды
        )
    );

    dataStream.subscribe(data => {
      console.log(data);
    });
  }

}
