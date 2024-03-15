import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  public auth: Auth = inject(Auth)

  constructor() {}

  public signUpUser(username, email, password) {
    
   return from(createUserWithEmailAndPassword(this.auth, email, password))
  }

  public loginUser(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }

  public logOut() {
    this.auth.signOut() 
  }


}
