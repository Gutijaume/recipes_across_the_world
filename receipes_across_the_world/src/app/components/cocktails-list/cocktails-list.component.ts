import { Component, OnInit } from '@angular/core';
import { Cocktail, CocktailsResponse } from 'models/cocktail';
import { CocktailsListService } from './cocktails-list.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent implements OnInit {

  public cocktailsList: Cocktail []
  public chosed: boolean = false


  constructor(private cocktailsListService : CocktailsListService) { }

  ngOnInit(): void {
    this.getCocktailsList()
  }

  getCocktailsList (): void {
    this.cocktailsListService.getRandomCocktails().subscribe ((res: CocktailsResponse)=>{
      console.log(res)
      this.cocktailsList = res.drinks
    })
  }

}
