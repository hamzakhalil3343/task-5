import { Component, OnInit } from '@angular/core';
import { AddnewbookPage } from './addnewbook/addnewbook.page';
import { BooksService } from '../../sdk/custom/books.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  loading = false;
  books: Books[] = [];
  constructor(private booksService: BooksService ,
    private modalController: ModalController) {}

  ngOnInit() {
    this.getAll();
  }
  async openAddModal() {
    const modal = await this.modalController.create({
      component: AddnewbookPage
    });
    return await modal.present();
  }
  getAll() {
    this.loading = true;

    this.booksService.getAllBooks().subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
        this.books = data.data.docs;
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
}

// Intefacing is Optional

interface Books {
  name: string;
  ibn: string;
  image_url: string;
  author: string;
  is_deleted: boolean;
}


