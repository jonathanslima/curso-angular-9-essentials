import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToProductCreate(){
    this.route.navigate(['products/criar-produto'])
  }

}
