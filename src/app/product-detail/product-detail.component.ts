import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../models/product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number = null;
  product: Product;

  constructor(private route: ActivatedRoute, private location: Location) {}


  ngOnInit() {
    this.product = new Product("Ipsum", "Ipsum",10000,10000,"Ipsum",0);
    this.route.params.forEach((urlParameters) => {
      this.productId = parseInt(urlParameters['id']);
  });
}
}
