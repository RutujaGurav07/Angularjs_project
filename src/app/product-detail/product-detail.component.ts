import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from '../product.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
pageTitle: string ="Product Detail";
errorMessage='';
product:IProduct|undefined;

  constructor(private route: ActivatedRoute,
               private router: Router,
               private productService: ProductService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id} `;
    if (id == 1)
   {
    this.product= {
      "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/image/leaf_rake.jpg"
    }
    }
    if (id == 2)
   {
    this.product= {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/image/gardencart.jpg"
    }
    }
    if (id == 5)
    {
     this.product= {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2019",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/image/hammer.jpg"
     }
     }
     if (id == 8)
     {
      this.product= {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2019",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/image/saw.jpg"
      }
      }
      if (id == 10)
      {
       this.product= {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2018",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/image/xbox-controller.jpg"
       }
       }
    
  }
  onBack():void{
    this.router.navigate(['/products']);
  }
 
}
