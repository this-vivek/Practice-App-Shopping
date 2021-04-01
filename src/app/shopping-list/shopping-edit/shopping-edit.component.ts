import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 constructor(private shoppingService:ShoppingService){

 }
 num:number
  ngOnInit(): void {
  }
  setShoppingData(name:string,amount:any)
  {
    this.num=amount
    const ingredient=new Ingredient(name,amount)
    this.shoppingService.setIngredient(ingredient)
    //console.log(name+amount)
  }


}