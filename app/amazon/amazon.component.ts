import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

  item1:string;
  item2:string;
  price1:number;
  price2:number;
  total:number;
  totalBill:number;
  tax:number;
  item11:string;
  item22:string;
  price11:number;
  price22:number;
  bill:string;
  final:number;
  flag:boolean=false;
  flag2:boolean=false;

  show= [];
  OnClick(price1:number,price2:number) {
    this.flag=true;
    this.total=((this.price1)*1)+((this.price2)*1);
    this.tax=this.total*0.2;
    this.totalBill=this.total+this.tax;
    return this.total;

    /*const items={
      it1:this.item1,
      it2:this.item2,
      p1:this.price1,
      p2:this.price2,

    };
    this.show.push(items);*/
  }

  Checkout()
  {
    this.flag2=true;
    this.item11=this.item1;
    this.item22=this.item2;
    this.price11=this.price1;
    this.price22=this.price2;
    this.bill="Total Bill";
    this.final=this.totalBill;
    return this.final;
  }
  constructor() { }

  ngOnInit() {
  }

}
