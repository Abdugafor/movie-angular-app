import { Injectable, inject } from '@angular/core';
import { Firestore, setDoc, doc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private auth: Auth = inject(Auth)
  private firestore: Firestore = inject(Firestore)

  constructor() {}

  public signUpUser(username, email, password) {
    
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        setDoc(doc(this.firestore, 'Users', user.uid), {
            name: username,
            email: email,
            photoURL: null
        })
 
      })
      .catch((error) => {
        const errorCode = error.code;
        
        console.log(errorCode)
      });
  }

  public loginUser(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }

  public logOut() {
    this.auth.signOut() 
  }


}
