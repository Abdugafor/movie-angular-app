import { NgModule } from "@angular/core";
import { DecorationComponent } from "../components/decoration/decoration.component";
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { MovieInfoCardComponent } from "../components/movie-info-card/movie-info-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DecorationComponent, 
        SpinnerComponent,
        MovieInfoCardComponent
    ],
    exports: [
        DecorationComponent, 
        SpinnerComponent,
        MovieInfoCardComponent
    ],
    imports: [
        CommonModule
    ]
})

export class SharedModule {}