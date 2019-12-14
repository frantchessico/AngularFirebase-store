import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  ProductCollection: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) {
     this.ProductCollection = afs.collection('products')
   }

   getProducts() {
    return this.ProductCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );;
   }

   saveProduct(product) {
    return this.ProductCollection.add(product);
   }

   changeActiveProduct(product) {
     return this.ProductCollection.doc(product.id)
         .update({
              active: !product.active
          })
   }

   getProductById(id) {
     return this.ProductCollection.doc(id).valueChanges();
   }

   updateProduct(product, id) {
     return this.ProductCollection.doc(id).update(product);
   }

   deleteProduct(id) {
     return this.ProductCollection.doc(id).delete();
   }

}
