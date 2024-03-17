import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from '@angular/fire/auth';
import { DataSnapshot, Database, child, get, ref, set } from '@angular/fire/database';
import { Store, select } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { AppState } from '../store';
import { selectUser } from '../store/selectors/auth.selectors';
import { Movie } from '../models/interfaces/movies.interface';
import { UserData } from '../models/interfaces/watchlist.interface';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  public auth: Auth = inject(Auth)
  public db: Database = inject(Database)
  
  private store: Store<AppState> = inject(Store)

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

  public writeUserData(columnName: string, columnValue: Movie[]) {
    return new Observable<void>(observer => {
      const unsubscribe = onAuthStateChanged(this.auth, user => {
        if (user) {
          const userRef = ref(this.db, 'users/' + user.uid)

          get(userRef).then(snapshot => {
            const userData = snapshot.val() || {}; // If no data exists, initialize as empty object
            userData.email = user.email;
  
            // Update only the specific column
            userData[columnName] = columnValue;
  
            // Set the updated user data in the database
            set(userRef, userData)
              .then(() => {
                observer.next();
                observer.complete();
              })
              .catch(error => {
                observer.error(error);
              });
          }).catch(error => {
            observer.error(error);
          });
        } else {
          observer.error(new Error('Not authenticated'));
        }
      });

      // Cleanup function
      return () => unsubscribe();
    });
  }

  public readTheData() {
    return new Observable<UserData>(observer => {
      const unsubscribe = onAuthStateChanged(this.auth, user => {
        if (user)  {
          get(child(ref(this.db), `users/${user.uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
              
              observer.next(snapshot.val())
              observer.complete()
            } else {
              observer.error('No data exist')
            }
          }).catch((error) => {
            console.error(error);
          });
        } else {
          observer.error(new Error('Not authenticated'))
        }
      })

      return () => unsubscribe()
    })
  }

}
