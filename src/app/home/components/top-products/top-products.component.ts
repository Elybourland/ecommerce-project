import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {

  topProducts = [
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
