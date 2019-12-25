import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addnewbook',
  templateUrl: './addnewbook.page.html',
  styleUrls: ['./addnewbook.page.scss'],
})
export class AddnewbookPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {}

  addNewBookForm: FormGroup;
  loading = false;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addNewBookForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      ibn: [null, [Validators.required]],
      author: [null, [Validators.required]],
      is_deleted: [false, [Validators.required]],
      image_url: [null]
    });
  }

  save() {}

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
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
