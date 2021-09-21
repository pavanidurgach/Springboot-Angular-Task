package com.example.BookStore;

import java.util.*;

public class BooksBusiness {

	@SuppressWarnings("deprecation")
	public static ArrayList<Books> getBooksList(){
		ArrayList<Books> bookList = new ArrayList<>();
		
		bookList.add(new Books("The Melting Words","Rahul Kowshik",400,new Date(47,12,15)));
		bookList.add(new Books("Emma","Jane Austen",600,new Date(99,1,21)));
		bookList.add(new Books("Connect the Dots","Rashmi Bansal",799,new Date(88,9,7)));
		bookList.add(new Books("Be Fearless","Jean Case",596,new Date(101,14,2)));
		
		return bookList;
	}
}
