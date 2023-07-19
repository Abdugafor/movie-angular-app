import { Component } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth = getAuth()

  constructor (private httpService: HttpService) {}

  fetchData() {
    this.httpService.getMovies('1')
      .subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      })
  }

  onLogout() {
    this.auth.signOut()
  }
}
