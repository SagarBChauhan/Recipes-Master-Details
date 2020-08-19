import { Injectable } from '@angular/core';
import { Recipe } from './recipe-modal';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[]=[
    {
      id:'r1',
      title:'Pav Bhaji',
      imageUrl:'https://i2.wp.com/www.binjalsvegkitchen.com/wp-content/uploads/2015/07/Pav-Bhaji-L2.jpg',
      ingredints:['1/2 cup vegetable oil','2 teaspoons chopped garlic','1 cup onions (chopped)','2 teaspoons fresh ginger (grated)','plum tomatoes (1 cup chopped roma)','2 cups cauliflower (finely chopped)','1 cup cabbage (chopped)','1 cup green peas ','1 cup carrots (grated)','4 potatoes (boiled and mashed)','3 tablespoons masala (pav bhaji)','salt (to taste)','1 tablespoon lemon juice','8 squares dinner rolls','1/2 tablespoon butter','1/4 cup finely chopped onion','1 tablespoon chile peppers (finely chopped green)','1/4 cup chopped fresh cilantro' ]
    },
    {
      id:'r2',
      title:'Idli',
      imageUrl:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      ingredints:['idli (Sufficient, batter to make 16 idlis)','idli (moulds)','13 drops oil (to grease the moulds)','steamer (Pressure cooker/idly)','2 cups water (for steaming)' ]
    },
    {
      id:'r3',
      title:'Samosa',
      imageUrl:'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      ingredints:['1 1/2 cups maida (/all purpose flour)','2 tablespoons oil (/butter/ghee)',,'1/4 teaspoon ajwain (/omam/carom seeds)','salt','peas (For potato, filling:)','2 large potatoes',
        '1/2 cup fresh green peas',
        '1 green chilli (long)',
        '1/2 inch ginger piece',
        '1/2 teaspoon Garam Masala',
        '1/2 teaspoon coriander powder',
        '1/4 teaspoon turmeric powder',
        '1/8 teaspoon amchur (/dry mango powder OR chaat masala powder)',
        '1/2 teaspoon cumin seeds',
        'salt',
        '2 teaspoons oil',
        'oil (for deep frying samosa.)']
    },
    {
      id:'r4',
      title:'Mango ice-cream',
      imageUrl:'https://images.unsplash.com/photo-1591677445539-840cc64705f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      ingredints:['1/2 cup cream (chilled, can use amul cream)',
        '1/2 cup milk',
        '1/2 cup milk powder',
        '2 mangoes (peeled and cut into cubes)',
        '2 tablespoons sugar (adjust sugar to taste)']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipes(recipeId: string){
    return{
      ...this.recipes.find(recipe=>{
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes=this.recipes.filter(recipe=>{
      return recipe.id !== recipeId;
    })
  }
}
