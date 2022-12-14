import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products:IProduct[]=[];
  categories:Category[]=[];
  addProduct: FormGroup;
  date=Date.now();

  constructor() {
    this.addProduct = new FormGroup({
      name: new FormControl("",[Validators.required]),
      quantity:new FormControl(1,[Validators.required,Validators.min(1)]),
      price:new FormControl(1,[Validators.required,Validators.min(1)]),
      img: new FormControl("", [Validators.required, Validators.pattern("^https?:\/\/[A-Za-z0-9:.]*([\/]{1}.*\/?)$")]),
      categoryId:new FormControl("",[Validators.required])
    });

    this.products=[
      {
        id:1,
        name:"product 1",
        quantity: 4,
        price:200,
        img:"../../../assets/chair.jpg",
        categoryId:1
      },
      {
        id:1,
        name:"product 2",
        quantity: 10,
        price:500,
        img:"../../../assets/chair.jpg",
        categoryId:2
      }
    ]

    this.categories=[
      {
        id:1,
        name:"mobiles"
      },
      {
        id:2,
        name:"laps"
      }
    ]
  }
  

  ngOnInit(): void {
  }

  AddProduct(){
    var newProduct: IProduct = {
      id: this.products.length + 1,
      name: this.addProduct.value["name"],
      price:this.addProduct.value["price"],
      quantity:this.addProduct.value["quantity"],
      img:this.addProduct.value["img"],
      categoryId:this.addProduct.value["categoryId"],
    }
    this.products.push(newProduct);
  }

}
