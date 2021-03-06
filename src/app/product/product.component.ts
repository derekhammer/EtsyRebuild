import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
products: FirebaseListObservable<any[]>;
  constructor(private router: Router, private productService: ProductService) {}

  // products: Product[] = [
  //   new Product("Hand carved soapstone bears", "Elliot", 4.5, 4.99, "bears", 1),
  //   new Product("Customized designer glasses", "Hisato", 4.8, 49.99, "bears", 2),
  //   new Product("Leftovers", "James", 0.3, 0.50, "bears", 3),
  //   new Product("EZ Sleep Pillow", "Nick", 4.2, 39.99, "bears", 4)
  // ];


  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key])
  }

}
