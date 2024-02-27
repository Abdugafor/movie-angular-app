import { Component, inject, OnDestroy} from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { Subscription } from 'rxjs'
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent  implements OnDestroy{
  private auth: Auth = inject(Auth)
  public user = null
  private user$ = user(this.auth)
  private userSubscription: Subscription



  constructor(private routeService: RouteService){
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      this.user = aUser
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()  
    this.routeService.setPreviousRoute('/profile')
  }

 
}
