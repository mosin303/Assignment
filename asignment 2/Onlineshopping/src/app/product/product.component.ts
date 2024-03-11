import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   
  product: any;

constructor(private api:DataService){}

  ngOnInit(): void {
    this.api.getData().subscribe((data)=>{
     this.product=data;
     console.log(this.product);
        });   
  }
}
