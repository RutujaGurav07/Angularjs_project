import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
pageTitle: string ="Product Detail";
product:IProduct;
  constructor(private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id} `;
    this.product= {
      "productId": id,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/image/leaf_rake.jpg"

    }
  }
  onBack():void{
    this.router.navigate(['/products']);
  }

}
