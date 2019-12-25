import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewbookPage } from './addnewbook.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewbookPageRoutingModule {}
