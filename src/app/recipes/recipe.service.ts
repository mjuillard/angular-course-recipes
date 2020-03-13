import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'A first recipe desc',
      'https://xxxx.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]
      ),
    new Recipe(
      'Another test recipe',
      'desc of a birger recipe',
      'https://xxxx.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
      )
  ];

  constructor( private slService: ShoppingListService ) {}

  getRecipes() {
    return this.recipes.slice(); // Get a copy to avoid change directly on the private recipes list
  }

  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
