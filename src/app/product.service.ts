import { Injectable } from '@angular/core';
import { IProduct } from './product-list/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getproduct(): IProduct[] {
 return [
   
  {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/image/leaf_rake.jpg"
  },
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2019",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/image/gardencart.jpg"
  },
  {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2019",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/image/hammer.jpg"
  },
  {
    "productId": 8,
    "productName": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": "May 15, 2019",
    "price": 11.55,
    "starRating": 3.7,
    "imageUrl": "assets/image/saw.jpg"
  },
  {
    "productId": 10,
    "productName": "Video Game Controller",
    "productCode": "GMG-0042",
    "releaseDate": "October 15, 2018",
    "price": 35.95,
    "starRating": 4.6,
    "imageUrl": "assets/image/xbox-controller.jpg"
  }
 ]
  }
  

}
