import { NgModule, } from "@angular/core";

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports:
    [
      MatSliderModule,
      MatSidenavModule,
      MatToolbarModule

    ],
  exports:
    [
      MatSliderModule,
      MatSidenavModule,
      MatToolbarModule

  ]
})

export class MaterialModule{

}
