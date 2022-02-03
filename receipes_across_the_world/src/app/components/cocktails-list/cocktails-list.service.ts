import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CocktailsResponse } from 'models/cocktail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsListService {

  constructor(private http: HttpClient) { }

  getRandomCocktails(): Observable<CocktailsResponse> {
    return this.http.get<CocktailsResponse>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin');
  }

}
