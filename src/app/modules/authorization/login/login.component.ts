import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth"

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

  auth = getAuth();

  constructor (private router: Router) {}

  onSubmit(email, password) {

    if (email === '' || password === '') {
      this.isShowEmptyField = true
    }else {
      this.isShowEmptyField = false

      signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
  
          console.log(errorCode)
          if (errorCode === 'auth/wrong-password') {
            this.isShowPasswordError = true
          }else if (errorCode === 'auth/invalid-email') {
            this.isShowInvalidEmail = true
            this.isShowUserNotFound = false
          }else if (errorCode === 'auth/user-not-found') {
            this.isShowUserNotFound =  true
            this.isShowInvalidEmail = false
          }
        });
    }
  }

  onNavigate() {
    this.router.navigate(['/watchlist'])

    onAuthStateChanged(this.auth, user => {
      if (user !== null) {
        console.log('loged in')
      }else {
        console.log('not loged')
      }
    })
  }
}
