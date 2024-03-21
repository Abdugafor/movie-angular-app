import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MovieInfoComponent } from "./movie-info.component";
import { CountBudgetPipe } from "src/app/pipes/count-budget.pipe";
import { CountBudgetLength } from "src/app/pipes/countBudgetLength.pipe";
import { SharedModule } from "../shared.module";
import { MovieInfoRoutingModule } from "./movieInfo.routing";

@NgModule({
    declarations: [
        MovieInfoComponent,
        CountBudgetPipe,
        CountBudgetLength,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MovieInfoRoutingModule
    ]
})

export class MovieInfoModule {}