import { Component, OnDestroy , inject} from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User, user } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs'

import { DatabaseService } from 'src/app/database.service';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy{
  private auth: Auth = inject(Auth);
  userState
  user$ = user(this.auth)
  userSubscription: Subscription

  constructor (private router: Router, private databaseService: DatabaseService, private httpSevice: HttpService) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      this.userState = aUser
    })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onNavigateUser() {
    console.log(this.userState)
    if (this.userState !== null) {
      this.router.navigate(['profile'])
    }else {
      this.router.navigate(['login'])
    }
  }

  onNavigateBack() {
    this.router.navigate(['../'])
  }

  onSearch(movieName: string) {
   this.router.navigate(['search', movieName])
  }
}
