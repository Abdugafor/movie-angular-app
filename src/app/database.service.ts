import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  auth = getAuth();
  db = getFirestore()
  collRef = collection(this.db, 'Users')

  constructor() { }

  public getData() {
  
    getDocs(this.collRef)
      .then((snapshot) => {
        let users = []

        snapshot.docs.forEach((doc) => {
          users.push({...doc.data(), id: doc.id})
        })

        console.log(users)
      })
  }

  

  public signUpUser(username, email, password) {
    
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        addDoc(this.collRef, {
          username: username,
          email: email
        } )
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorCode)
      });
  }
}
