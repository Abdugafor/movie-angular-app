import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Database, child, get, ref, set } from '@angular/fire/database';
import { Store, select } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { AppState } from '../store';
import { selectUser } from '../store/selectors/auth.selectors';
import { Movie } from '../models/interfaces/movies.interface';

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

  public writeUserData(moviesList: Movie[]) {
    return new Observable<void>(observer => {
      const unsubscribe = onAuthStateChanged(this.auth, user => {
        if (user) {
          set(ref(this.db, 'users/' + user.uid), {
            email: user.email,
            movies: moviesList
          })
            .then(() => {
              observer.next();
              observer.complete();
            })
            .catch(error => {
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
    return new Observable<Movie[]>(observer => {
      const unsubscribe = onAuthStateChanged(this.auth, user => {
        if (user)  {
          get(child(ref(this.db), `users/${user.uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
              
              observer.next(snapshot.val().movies)
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
