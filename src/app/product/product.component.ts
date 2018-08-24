import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    new Product("Hand carved soapstone bears", "Elliot", 4.5, 4.99, "./assets/bears.jpg"),
    new Product("Customized designer glasses", "Hisato", 4.8, 49.99, "./assets/bears.jpg"),
    new Product("Leftovers", "James", 0.3, 0.50, "./assets/bears.jpg"),
    new Product("EZ Sleep Pillow", "Nick", 4.2, 39.99, "./assets/bears.jpg")
  ];


  ngOnInit() {
  }

}
