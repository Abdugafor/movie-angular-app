import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import * as fromAuth from '../../store/reducer/auth.reducer'

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";import { EffectsModule } from "@ngrx/effects";
import { RouterModule } from "@angular/router";
import { AuthRouingModule } from "./auth.routing";


@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        AuthRouingModule,
        StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
       
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        UserProfileComponent,
    ],

})

export class AuthModule {}