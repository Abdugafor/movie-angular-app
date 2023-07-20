import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from './environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './modules/browse/browse.component';
import { WatchlistComponent } from './modules/watchlist/watchlist.component';
import { ComingsoonComponent } from './modules/comingsoon/comingsoon.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularComponent } from './modules/browse/popular/popular.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PartiesComponent } from './modules/browse/parties/parties.component';
import { BigMovieComponent } from './modules/browse/big-movie/big-movie.component';
import { DecorationComponent } from './components/decoration/decoration.component';
import { MovieInfoComponent } from './modules/browse/movie-info/movie-info.component';
import { CountBudgetPipe } from './pipes/count-budget.pipe';
import { CountBudgetLength } from './pipes/countBudgetLength.pipe';
import { CardComponent } from './components/card/card.component';
import { MovieInfoCardComponent } from './components/movie-info-card/movie-info-card.component';
import { LoginComponent } from './modules/authorization/login/login.component';
import { SignupComponent } from './modules/authorization/signup/signup.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    WatchlistComponent,
    ComingsoonComponent,
    HeaderComponent,
    PopularComponent,
    SpinnerComponent,
    PartiesComponent,
    BigMovieComponent,
    DecorationComponent,
    MovieInfoComponent,
    CountBudgetPipe,
    CountBudgetLength,
    CardComponent,
    MovieInfoCardComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
