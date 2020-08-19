import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem : Recipe;

  constructor() { }

  ngOnInit() {}

}
