import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor( 
              private router: Router, 
              private productService: ProductService
            ) { }

  ngOnInit() {
  }

  addProduct(f) {

    if(f.valid) {
       this.productService.saveProduct(f.value)
      .then(() => this.router.navigate(['/products']))
      .catch(err => console.error(err))
    }else {
      alert('this form is invalid')
    }
   
  }

  log(data) {
    console.log(data);
  }

}
