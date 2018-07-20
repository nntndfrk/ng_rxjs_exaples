import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  template: `
    <h4>RxJS Examples</h4>
    <p>AsyncSubject</p>
  `,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    const dataStream = forkJoin(
      this.http.get('http://5b51cffc6ecd1b0014aa3607.mockapi.io/data'),
      this.http
        .get('http://5b51cffc6ecd1b0014aa3607.mockapi.io/otherdata')
        .pipe(
          delay(2000) // эмуляция задержка ответа на 2 секунды
        )
    );

    dataStream.subscribe(data => {
      console.log(data);
    });
  }

}
