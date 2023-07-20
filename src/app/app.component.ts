import { Component } from '@angular/core';
import { DatabaseService } from './database.service';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor (private httpService: HttpService, private databaseService: DatabaseService) {}

  fetchData() {
    this.httpService.getMovies('1')
      .subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      })
  }

  onLogout() {
   this.databaseService.logOut()
  }
}
