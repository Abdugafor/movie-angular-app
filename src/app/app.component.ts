import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Auth, User, user } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs'

import { DatabaseService } from './services/database.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private auth: Auth = inject(Auth);
  public isShowSidebar = false
  user$ = user(this.auth)
  isLogedIn: User | null

  currentPage
  searchTerm = 'Sea'

  constructor (
    private httpService: HttpService, 
    private databaseService: DatabaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
      this.user$.subscribe((aUser: User | null) => {
        this.isLogedIn = aUser
      })
     this.activatedRoute.queryParams.subscribe(params => {
      // Update the component variables with the current URL parameters
      this.searchTerm = params['searchTerm'];
      this.currentPage = +params['page']; // Convert to a number if necessary
    });

    }

  ngOnInit(): void {
    this.databaseService
  }

  fetchData() {
    this.httpService.getMovies('1')
      .subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      })
  }

  onShowSidebar() {
    this.isShowSidebar = !this.isShowSidebar
  }

  onLogout() {
   const currentRoute =  this.router.url
   
   if (currentRoute !== '/') {
    this.router.navigate(['/'])
   }else {
    this.router.navigate(['/comingsoon'])
   }

   this.databaseService.logOut()
  }
}
