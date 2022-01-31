import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { dishModel } from 'models/food-divs';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})export class FormularioComponent implements OnInit {
  @Output() sendDish = new EventEmitter<dishModel>()

  public dish: dishModel;


  constructor() {}

  ngOnInit(): void {
    this.dish = {
      name: '',
      img: '',
      description: '',
      ingredients: [],
      flag: '',
    };
  }

  public addNewDish(): void {
    this.sendDish.emit(this.dish);
    
  }

  public saveName(value: string): void {
    this.dish.name = value;
  }

  public saveFlag(value: string): void {
    if (this.dish){
      this.dish.flag = value;
    }


  }

  public saveImg(value: string): void {
    if (this.dish) {
      this.dish.img = value;
    }
  }

  // public saveIngredients(value: string): void {
  //   if (this.dish) {
  //     this.dish.ingredients = value;
  //   }
  // }

  public saveDescription(value: string): void {
    if (this.dish) {
      this.dish.description = value;

    }
  }


}
