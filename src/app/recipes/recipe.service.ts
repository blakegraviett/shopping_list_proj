import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopinglist.scervice";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.slobodenpecat.mk/wp-content/uploads/2023/08/%D0%BF%D0%B5%D1%87%D0%B5%D0%BD-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%87%D1%83%D0%BA-%D1%81%D0%BE-%D1%98%D0%B0%D1%98%D1%86%D0%B0-%D0%A4%D0%BE%D1%82%D0%BE-therecipestuff-in.jpg', [
      new Ingredient('Meat', 1), new Ingredient('French Fries', 20)
    ]),
    new Recipe('Another Test Recipe', 'This is a test', 'https://www.slobodenpecat.mk/wp-content/uploads/2023/08/%D0%BF%D0%B5%D1%87%D0%B5%D0%BD-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%87%D1%83%D0%BA-%D1%81%D0%BE-%D1%98%D0%B0%D1%98%D1%86%D0%B0-%D0%A4%D0%BE%D1%82%D0%BE-therecipestuff-in.jpg', [
      new Ingredient('Buns', 2), new Ingredient('Meat', 1)
    ]),
  ];

  constructor(private slService: shoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
  }
}
