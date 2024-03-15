import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { AuthActions } from 'src/app/store/action/auth.actions';
import { selectLogInErrorMessage } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: Observable<string>
  isShowPasswordError = false
  isShowInvalidEmail = false
  isShowUserNotFound = false
  isShowEmptyField = false 

  constructor (
    private router: Router, 
    private store: Store<AppState>
    ) {}

    ngOnInit(): void {
      this.errorMessage = this.store.pipe(select(selectLogInErrorMessage))
    }

  onSubmit(email: string, password: string) {

    if (email === '' || password === '') {
      this.isShowEmptyField = true
    }else {
      this.isShowEmptyField = false        
    }

    this.store.dispatch((AuthActions.logInUser({email: email, password: password})))
   
  }

  onNavigate() {
    this.router.navigate(['/'])
  }
}
