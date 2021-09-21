import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetBookComponent } from './get-book/get-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"add-book",component:AddBookComponent},
  {path:"get-book",component:GetBookComponent},
  {path:"",redirectTo:"/add-book",pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    GetBookComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{enableTracing:false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



