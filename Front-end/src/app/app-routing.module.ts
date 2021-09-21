import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { GetBookComponent } from './get-book/get-book.component';

const routes: Routes = [
  {path:"add-book",component:AddBookComponent},
  {path:"get-book",component:GetBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
