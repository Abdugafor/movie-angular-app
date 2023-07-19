import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';


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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
