import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    exports: [
        CommonModule,
        PageNotFoundComponent,

    ]

})
export class SharedModule { }