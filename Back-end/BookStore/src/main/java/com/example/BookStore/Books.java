package com.example.BookStore;

import java.util.Date;

public class Books {
	private String title;
	private String author;
	private int price;
	private Date publishedOn;
	
	public Books(String title, String author, int price, Date publishedOn) {
		super();
		this.title = title;
		this.author = author;
		this.price = price;
		this.publishedOn = publishedOn;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Date getPublishedOn() {
		return publishedOn;
	}
	public void setPublishedOn(Date publishedOn) {
		this.publishedOn = publishedOn;
	}
	
	
}
