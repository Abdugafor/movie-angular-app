import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core'
import { MovieInfoComponent } from "./movie-info.component";

const routes: Routes = [
    {path: '', component: MovieInfoComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieInfoRoutingModule {}