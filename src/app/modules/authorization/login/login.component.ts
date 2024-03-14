import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { AppState } from 'src/app/store';
import { AuthActions } from 'src/app/store/action/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isShowPasswordError = false
  isShowInvalidEmail = false
  isShowUserNotFound = false
  isShowEmptyField = false 

  constructor (
    private router: Router, 
    private databaseServie: DatabaseService,
    private store: Store<AppState>
    ) {}

  onSubmit(email: string, password: string) {

    if (email === '' || password === '') {
      this.isShowEmptyField = true
    }else {
      this.isShowEmptyField = false        
    }

    this.store.dispatch((AuthActions.logInUser({email: email, password: password})))
   
  }

  onNavigate() {
    this.router.navigate(['/watchlist'])
  }
}
