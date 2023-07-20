import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isShowPasswordError = false
  isShowEmptyFieldError = false

  constructor (private router: Router, private database: DatabaseService) {}
  

  onSubmit(username: string, email: string, password: string, secondPassword: string): void {
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
      this.database.signUpUser(username, email, password)
      this.router.navigate(['/profile'])
    }
  }

  onNavigate() {
    this.router.navigate(['/browse'])
  }
}
