import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shopinglist.scervice';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients!: Ingredient[];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  constructor(private slService: shoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
