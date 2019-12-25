import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewbookPageRoutingModule } from './addnewbook-routing.module';

import { AddnewbookPage } from './addnewbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewbookPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddnewbookPage]
})
export class AddnewbookPageModule {}
