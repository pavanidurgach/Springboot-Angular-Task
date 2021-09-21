import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent implements OnInit {
  allBooks:any
  constructor(private service:BooksService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe(data=>{
      this.allBooks=data;  
    });
  }
}