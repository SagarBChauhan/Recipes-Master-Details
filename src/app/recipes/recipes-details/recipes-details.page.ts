import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe-modal';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  loadedRecipe:Recipe;

  constructor(
    private activatedRout: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router,
    private altctr: AlertController,
    private actshctr: ActionSheetController
    ) { }

  ngOnInit() {
    this.activatedRout.paramMap.subscribe(paramMap=>{
      if (!paramMap.has('recipeId')){
        this.router.navigate(['recipes']);
        return;
      }
      const recipeId=paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipes(recipeId);

      if(!this.loadedRecipe.id){
        this.router.navigate(['recipes']);
      }
    });
  }
  
  async onDeleteClick(){

    //Delete: using AlertController
    const alert=await this.altctr.create({
      header: 'Delete Recipe',
      message: 'Are you sure want to delete this recipe?',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Okay, Delete',
          role: 'destructive',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['recipes']);
          }
        }
      ]
    });

    // await alert.present();


    //Delete: using ActionSheetcontroller
    const alert2=await this.actshctr.create({
      header: 'Delete Recipe',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close'
        },
        {
          text: 'Okay, Delete',
          role:'destructive',
          icon: 'trash',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['recipes']);
          }
        }
      ]
    });

    await alert2.present();

  }

}
