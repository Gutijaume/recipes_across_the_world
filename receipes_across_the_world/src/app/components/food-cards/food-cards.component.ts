import { Component, OnInit } from '@angular/core';
import { dishModel } from 'models/food-divs';

@Component({
  selector: 'app-food-cards',
  templateUrl: './food-cards.component.html',
  styleUrls: ['./food-cards.component.scss']
})

export class FoodCardsComponent implements OnInit {
  public viewIngredients: boolean = false;

  public dish: dishModel = {
    name: 'Ceviche',
    img: 'https://jameaperu.com/wp-content/uploads/2020/05/ceviche-peruano-original_700x465.jpg',
    description:
      'El cebiche, ceviche, sebiche o seviche (según la RAE, puede ser escrito de estas cuatro formas, dependiendo del lugar) es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.',
    ingredients: ['Pescado', 'Jugo de limón', 'Ají', 'Cilantro', 'Choclo'],
    flag: 'https://cdn-icons-png.flaticon.com/512/197/197563.png',
  };

  public dishList: dishModel[] = [this.dish];



  constructor() {}

  ngOnInit(): void {
    this.dishList.push(
      {
        name: 'Paella',
        img: 'https://images.aws.nestle.recipes/resized/bad4d3b51ce0e061b4ed00574e00ed03__0015_16_-__Paella_1200_600.jpg',
        description:
          'La paella (del valenciano paella, que significa sartén y se refiere al recipiente con el que se hace la receta y que le da nombre, y este a su vez del latín patella) es una receta de cocina con base de arroz, con origen en la actual Comunidad Valenciana (España), hoy en día muy popular en toda España y servida en restaurantes de todo el mundo',
        ingredients: ['Arroz', 'Carne', 'Verduras', 'Azafrán', 'Caracoles'],
        flag: 'https://cdn-icons-png.flaticon.com/512/197/197593.png',
      },
      {
        name: 'Pizza Margarita',
        img: 'https://www.elespectador.com/resizer/Ny-8ZVbpvafu_INBbXmaPBbyKRk=/525x350/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/D2KL4RRCRJA7RJC5TNULFZEKR4.jpg',
        description:
          'La pizza margarita es una típica pizza napolitana elaborada con tomate, mozzarella (tradicionalmente se usa el Fior di latte), albahaca fresca, sal y aceite. Se trata de la pizza napolitana más popular, junto con la marinera.',
        ingredients: [
          'Masa de pizza',
          'Tomate',
          'Queso mozzarella',
          'Albahaca',
        ],
        flag: 'https://cdn-icons-png.flaticon.com/512/323/323325.png',
      }
    );
  }

  onBtnClick(): void {
    this.viewIngredients = !this.viewIngredients;
  }

  public handleDish(dish: dishModel): void {
    this.dishList.push(dish);
  }
}

