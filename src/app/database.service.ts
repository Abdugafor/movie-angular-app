import { Injectable, inject } from '@angular/core';
import { Firestore, setDoc, doc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

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

  public logOut() {
    this.auth.signOut()
  }

  public uploadImage(userUID, img) {
    setDoc(doc(this.firestore, 'Users', userUID), {
      photoURL: img
    })
  }

}
