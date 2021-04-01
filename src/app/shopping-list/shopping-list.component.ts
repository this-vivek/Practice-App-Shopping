import { Component, OnChanges, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]
  constructor(private shoppingService:ShoppingService) {
  }
  
  ngOnInit(): void {
    this.ingredients=this.shoppingService.getIngredientCopy()
    this.shoppingService.ingredientChanged.subscribe((ingredient:Ingredient[])=>{
      this.ingredients=ingredient
    })
  }


}
