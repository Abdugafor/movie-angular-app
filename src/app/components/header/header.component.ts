import { Component, OnDestroy , inject} from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User, user } from '@angular/fire/auth';
import { Subscription } from 'rxjs'

import { RouteService } from 'src/app/services/route.service';

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

  constructor (
    private router: Router, 
    private routeService: RouteService
    ) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      this.userState = aUser
    })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onNavigateUser() {

    if (this.userState !== null) {
      this.router.navigate(['profile'])
    }else {
      this.router.navigate(['login'])
    }
  }

  onNavigateBack() {
    const prvRoute = this.routeService.getPreviousRoute()
    this.router.navigate([prvRoute])
  }

  onSearch(movieName: string) {
   this.router.navigate(['search', movieName])
  }
}
