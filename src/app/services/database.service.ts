import { Injectable, inject } from '@angular/core';
import { Firestore, setDoc, doc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
// import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private auth: Auth = inject(Auth)
  private firestore: Firestore = inject(Firestore)
  // private storage: Storage = inject(Storage)

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

  // public uploadImage(userUID, img) {
  //   const imageRef = ref(this.storage, userUID)

  //    uploadBytes(imageRef, img).then((snapshot) => {
  //       getDownloadURL(imageRef).then((url) => {
  //         setDoc(doc(this.firestore, 'Users', userUID), {
  //           photoURL: url
  //         })
  //       })
  //       .catch(err => {
  //         console.log(err, 'while export image')
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })

   
  // }

}
