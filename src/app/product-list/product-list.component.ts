import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']  
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  pageTitle: string = "Product list";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  currentSort:string="productName";
  sortAsc:boolean=true;
  sortString:string='asc'
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product list : ' + message;
  }
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  filteredProducts: IProduct[];
  products: IProduct[] = [];



  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit(): void {
    this.products = this.productService.getproduct();
    this.filteredProducts = this.products;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
  sort(filterBy: string){
    this.currentSort = filterBy
    this.sortAsc = !this.sortAsc ;
    if(this.sortAsc){
      this.sortString = 'asc'
    }
    else{
      this.sortString = 'desc'    
    }
  }

  
  // sort(filterBy: string, asc: boolean): void {

  //   filterBy = filterBy.toLocaleLowerCase();
  //   this.products.sort((productone: IProduct, producttwo: IProduct) =>
  //     (productone.price < productone.price ? -1 : 1));
  //   this.filteredProducts = this.products;
  //   console.log(this.products);
  // }

}
