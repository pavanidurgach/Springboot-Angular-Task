package com.example.BookStore;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AppController {
    static ArrayList<Books> bookList = BooksBusiness.getBooksList();
    
    @GetMapping("/get-book")
    @RequestMapping("/get-book")
    public ArrayList<Books> getBooks() {
    	//System.out.println("AppController -> get book");
    	return bookList;
    }

	@PostMapping(value ="/add-book")
	public ArrayList<Books> addBook(@RequestBody Books book) {
		bookList.add(book);
		//System.out.println("Appcontroller -> add book");
		return bookList;
	}
	
/*	@SuppressWarnings({ "deprecation", "null" })
	@GetMapping("/Get_Book")
	public String getBook(@RequestParam String title,@RequestParam String author,@RequestParam int price,@RequestParam String publishedOn,Model model) {
		//BooksBusiness business = new BooksBusiness();
		ArrayList<Books> bookList = BooksBusiness.getBooksList();
		ArrayList<Books> result = null;
		System.out.println(publishedOn);
		String[] str = publishedOn.split("-");
		Books entry = new Books(title,author,price,new Date(Integer.parseInt(str[2]),Integer.parseInt(str[1]),Integer.parseInt(str[0])));
		for(Books temp:bookList) {
			if(temp.equals(entry)) {
			   result.add(temp);
			   model.addAttribute("booksList",result);
			   return "books";
			}
		}
		//bookList.add(new Books(title,author,price,publishedOn));
		
		model.addAttribute("booksList",result);
		return "books";
	}
	*/
}
