import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  
  products = [
    {image: "/assets/images/blue-shoe.png", name: "Blue shoes"},
    {image: "/assets/images/flower-heels.png", name: "Flower heels"},
    {image: "/assets/images/mug.png", name: "Mug"},
    {image: "/assets/images/pink-shoe.png", name: "Pink shoes"},
    {image: "/assets/images/red-shoe.png", name: "Red shoes"},
    {image: "/assets/images/watch.png", name: "Watch"}
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  prev() {

  }

  next() {

  }

}
