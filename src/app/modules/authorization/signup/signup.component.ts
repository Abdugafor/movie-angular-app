import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserSignUp } from 'src/app/models/interfaces/auth.interface';
import { DatabaseService } from 'src/app/services/database.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isShowPasswordError = false
  isShowEmptyFieldError = false

  constructor (private router: Router, private database: DatabaseService) {}
  

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
      this.database.signUpUser(user.username, user.email, user.password)
    }
  }

  onNavigate() {
    this.router.navigate(['/browse'])
  }
}
