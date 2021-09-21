export class Books {
    title="";
    author="";
    price=0;
    publishedOn="";
    Books(title: string,author: string,price: number,publishedOn: string){
        this.title=title;
        this.author=author;
        this.price=price;
        this.publishedOn=publishedOn;
    }
}
