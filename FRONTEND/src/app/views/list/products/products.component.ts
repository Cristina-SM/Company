import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/Products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filterPost = '';
  Products:any = [];
  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.viewProducts();
  }

  viewProducts(){
    this.ProductsService.getProducts().subscribe((response)=>{
      this.Products = response;
      console.log(response);
    })
  }
}
