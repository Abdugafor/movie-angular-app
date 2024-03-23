import { RouterModule, Routes } from "@angular/router";
import { ComingsoonComponent } from "./comingsoon.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '', component: ComingsoonComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
  
export class ComingSoonRoutingModule { }