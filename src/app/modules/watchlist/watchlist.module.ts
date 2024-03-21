import { NgModule } from "@angular/core";
import { WatchlistComponent } from "./watchlist.component";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import * as fromWatchlist from '../../store/reducer/watchlist.reducer';
import { EffectsModule } from "@ngrx/effects";
import { WatchlistEffects } from "src/app/store/effects/watchlist.effects";
import { SharedModule } from "../shared.module";
import { WatchlistRoutingModule } from "./watchlist.routing";

@NgModule({
    declarations: [
        WatchlistComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        WatchlistRoutingModule,
        StoreModule.forFeature(fromWatchlist.watchlistFeatureKey, fromWatchlist.reducer),
        EffectsModule.forFeature([WatchlistEffects])
    ],
    providers: [],

})

export class WatchlistModule{}