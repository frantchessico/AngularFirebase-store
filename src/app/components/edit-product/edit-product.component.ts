import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  id = "";

  product: Product = {
    title: "",
    description: "",
    quantity: 0,
    price: 0,
    active: false
  }

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
 
    this.getOneProduct(this.id);
  }

  getOneProduct(id) {
    this.productService.getProductById(id)
        .subscribe((res: Product) => this.product = res)
  }

  updateProduct(f) {
    if(f.valid) {
      this.productService.updateProduct(this.product, this.id)
          .then(() => this.router.navigate(['/products']))
          .catch((err) => console.error(err))
    }
  }

}
