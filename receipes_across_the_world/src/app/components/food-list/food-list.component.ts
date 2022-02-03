import { Component, OnInit } from '@angular/core';
import { Meal, MealResponse } from 'models/meal';
import { windowWhen } from 'rxjs';
import { FoodListService } from './food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList : Meal[]

  constructor(private foodListService : FoodListService) { }

  ngOnInit(): void {
    this.getFoodList()
  }

  getFoodList (): void {
    this.foodListService.getChickenMeals().subscribe((res: MealResponse) => {
      console.log(res)
      this.foodList = res.meals
    })

  }

}
