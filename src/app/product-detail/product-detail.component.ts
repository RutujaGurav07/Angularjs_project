import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
pageTitle: string ="Product Detail";
product:IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
