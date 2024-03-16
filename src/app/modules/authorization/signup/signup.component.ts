import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserSignUp } from 'src/app/models/interfaces/auth.interface';
import { AppState } from 'src/app/store';
import { AuthActions } from 'src/app/store/action/auth.actions';
import { selectSignUpErrorMessage } from 'src/app/store/selectors/auth.selectors';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  errorMessage: Observable<string>
  isShowPasswordError = false
  isShowEmptyFieldError = false

  constructor (private router: Router, private store: Store<AppState>) {}
  
  ngOnInit(): void {
    this.errorMessage = this.store.pipe(select(selectSignUpErrorMessage))  
  }

  onSubmit(user: IUserSignUp): void {
    if (user.password !== user.secondPassword) {
      this.isShowPasswordError = true
    }
    else if (
      user.email === '' ||
      user.password === '' ||
      user.secondPassword === ''
    ) {
      this.isShowEmptyFieldError = true
    } 
    else {
     this.store.dispatch(AuthActions.signUpUser({user: user}))
    }
  }

  onNavigate() {
    this.router.navigate(['/'])
  }
}
