import { RouterModule, Routes } from "@angular/router";
import { WatchlistComponent } from "./watchlist.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '', component: WatchlistComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
 
export class WatchlistRoutingModule { }