import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://prods3.imgix.net/images/articles/2018_05/nonfeatured-butter-tarts-recipe.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
