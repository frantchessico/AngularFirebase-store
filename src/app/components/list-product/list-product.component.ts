import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  filter = "";
  resultSearch: any[] = [];
  products: any[] = [];

  ngOnInit() {
    console.log('salam');
    this.listProduct();
  }

  listProduct() {
    this.productService.getProducts()
        .subscribe(res => {
          console.log('data: ', res)
          this.resultSearch = this.products = res;
        })
  }

  powerProduct(product) {
    this.productService.changeActiveProduct(product)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
  }

  removeProduct(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        this.productService.deleteProduct(id)
        .then(() => console.log('product is deleted'))
        .catch((err) => console.error(err))

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

    
  }

  serach() {
    if(this.filter != "") {
      this.resultSearch = this.products.filter(product => product.title.toLowerCase().includes(this.filter.toLowerCase()) || product.description.toLowerCase().includes(this.filter.toLowerCase()));
    }else {
      this.resultSearch = this.products;
    }
   
  }

}
