import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http:HttpClient) { }
  
  getBooks():Observable<Object>{
    return this.http.get("http://localhost:8080/get-book");
  }

  addBook(book: Books): Observable<Object> {
    return this.http.post("http://localhost:8080/add-book", book);
  }
}
