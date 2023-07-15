import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor (private httpService: HttpService) {}

  fetchData() {
    this.httpService.getMovies()
      .subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      })
  }
}
