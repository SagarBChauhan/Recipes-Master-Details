import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesDetailsPage } from './recipes-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesDetailsPageRoutingModule {}
