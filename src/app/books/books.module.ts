import { AddnewbookPage } from './addnewbook/addnewbook.page';
import { BooksPage } from './books.page';
import { BooksPageRoutingModule } from './books-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BooksPageRoutingModule],
  declarations: [BooksPage, AddnewbookPage],
  entryComponents: [AddnewbookPage]
})
export class BooksPageModule {}
