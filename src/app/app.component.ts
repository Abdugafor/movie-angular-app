import { Component, EventEmitter, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Auth, User, user } from '@angular/fire/auth';

import { DatabaseService } from './services/database.service';
import { HttpService } from './services/http.service';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { AuthActions } from './store/action/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
  private auth: Auth = inject(Auth);

  isShowSidebar: boolean = false

  user$ = user(this.auth)
  isLogedIn: User | null
 
  currentPage
  searchTerm = 'Sea'

  constructor (
    private httpService: HttpService, 
    private databaseService: DatabaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
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
      let user = JSON.parse(localStorage.getItem('user'))
      this.store.dispatch(AuthActions.getUserFromLocalstorage(user))
    }

  fetchData() {
    this.httpService.getMovies('1')
      .subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      })
  }


  onLogout() {
   const currentRoute =  this.router.url
   
   if (currentRoute !== '/') {
    this.router.navigate(['/'])
   }else {
    this.router.navigate(['/comingsoon'])
   }

   this.store.dispatch(AuthActions.logOutUser())
   this.databaseService.logOut()
  }

  onShowSideBar(isTrue) {
    this.isShowSidebar = isTrue
  }

  onToggleSidebar() {
    this.isShowSidebar = !this.isShowSidebar
  }
}
