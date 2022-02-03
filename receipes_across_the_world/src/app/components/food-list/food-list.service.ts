import { Meal, MealResponse } from 'models/meal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor(private http: HttpClient) { }

  getChickenMeals(): Observable<MealResponse> {
    return this.http.get<MealResponse>('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken');
  }

  getSpanishMeals(){
    return this.http.get ('https://www.themealdb.com/api/json/v1/1/filter.php?a=Spanish');
  }

}


