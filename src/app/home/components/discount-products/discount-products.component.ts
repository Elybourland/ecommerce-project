import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-products',
  templateUrl: './discount-products.component.html',
  styleUrls: ['./discount-products.component.scss']
})
export class DiscountProductsComponent implements OnInit{

  discountProducts = [
    {image: "/assets/images/blue-shoe.png", name: "Blue shoes"},
    {image: "/assets/images/flower-heels.png", name: "Flower heels"},
    {image: "/assets/images/pink-shoe.png", name: "Pink shoes"},
    {image: "/assets/images/red-shoe.png", name: "Red shoes"}
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  prev() {

  }

  next() {

  }

}
