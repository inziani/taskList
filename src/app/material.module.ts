import { NgModule, } from "@angular/core";

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports:
    [
      MatSliderModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatSelectModule,
      MatNativeDateModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatDialogModule


    ],
  exports:
    [
      MatSliderModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatSelectModule,
      MatNativeDateModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatDialogModule

  ]
})

export class MaterialModule{

}
