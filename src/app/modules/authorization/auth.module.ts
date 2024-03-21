import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import * as fromAuth from '../../store/reducer/auth.reducer'
import { AuthEffects } from '../../store/effects/auth.effects';

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";import { EffectsModule } from "@ngrx/effects";
import { RouteEffects } from "src/app/store/effects/route.effects";
import { RouterModule } from "@angular/router";
import { AuthRouingModule } from "./auth.routing";
;

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        AuthRouingModule,
        StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
        EffectsModule.forFeature([AuthEffects, RouteEffects]),
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        UserProfileComponent
    ],

})

export class AuthModule {}