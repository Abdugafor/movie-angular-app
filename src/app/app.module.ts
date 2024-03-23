import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';


import { environment } from './environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './modules/browse/browse.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularComponent } from './modules/browse/popular/popular.component';
import { PartiesComponent } from './modules/browse/parties/parties.component';
import { BigMovieComponent } from './modules/browse/big-movie/big-movie.component';


import { CardComponent } from './components/card/card.component';

import { SearchComponent } from './modules/search/search.component';
import { ErrorComponent } from './components/error/error.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './modules/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { RouteEffects } from './store/effects/route.effects';





@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    HeaderComponent,
    PopularComponent,
    PartiesComponent,
    BigMovieComponent,

    CardComponent,
    SearchComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([AuthEffects, RouteEffects]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
