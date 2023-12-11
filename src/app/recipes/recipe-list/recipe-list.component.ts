import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', "https://cdn.pixabay.com/photo/2023/07/27/07/42/cherry-cake-8152717_1280.jpg" )

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
