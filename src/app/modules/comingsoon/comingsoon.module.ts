import { NgModule } from "@angular/core";
import { ComingsoonComponent } from "./comingsoon.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { ComingSoonRoutingModule } from "./comingsoon.routing";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComingSoonRoutingModule
    ],
    declarations: [
        ComingsoonComponent,
    ]
})

export class ComingSoonModule {}