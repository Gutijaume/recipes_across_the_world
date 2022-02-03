export interface Cocktail
   {
  strDrink: string;
  strDrinkThumb: string;
  // ingredients: string;
}

export interface CocktailsResponse {
  drinks: Cocktail[];
}
