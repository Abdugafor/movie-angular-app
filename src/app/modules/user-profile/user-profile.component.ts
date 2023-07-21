import { Component, inject, OnDestroy} from '@angular/core';

import { Auth, User, user } from '@angular/fire/auth';

import { Subscription } from 'rxjs'

import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent  implements OnDestroy{
  private auth: Auth = inject(Auth)
  private user = null
  private user$ = user(this.auth)
  private userSubscription: Subscription
  private selectedFile: File
  private url 

  public editMode = false


  constructor(private databaseService: DatabaseService){
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      this.user = aUser
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()  
  }

  onGetImg(img) {
    if (img.target.files && img.target.files[0]) {
    
     this.selectedFile = img.target.files[0]
    }
  }

  onActivateEditMode() {
    this.editMode = true
  }

  onSubmit() {
    this.editMode = false
  }

 
}
