import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe-modal';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  loadedRecipe:Recipe;

  constructor(private activatedRout: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.activatedRout.paramMap.subscribe(paramMap=>{
      if (!paramMap.has('recipeId')){
        return;
      }
      const recipeId=paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipes(recipeId);
    });
  }

}
