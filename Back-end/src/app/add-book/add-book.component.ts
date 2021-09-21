import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: BooksService) {
  }

  addForm!: FormGroup;

  ngOnInit():void {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      price: [0, Validators.required],
      publishedOn: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.addBook(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(["get-book"]);
      });
  }
}