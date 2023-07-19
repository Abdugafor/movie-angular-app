import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

interface ISingUp {
  username: string,
  email: string,
  password: string,
  repeatPassword: string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isShowPasswordError = false
  isShowEmptyFieldError = false
  auth = getAuth();

  constructor (private router: Router) {}
  

  onSubmit(email: string, password: string, secondPassword: string): void {
    if (password !== '' && secondPassword !== '' && password !== secondPassword) {
      this.isShowPasswordError = true
    }
    else if (
      email === '' ||
      password === '' ||
      secondPassword === ''
    ) {
      this.isShowEmptyFieldError = true
    } 
    else {

      createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          console.log(errorCode)
        });
    }
  }

  onNavigate() {
    this.router.navigate(['/watchlist'])
  }
}
