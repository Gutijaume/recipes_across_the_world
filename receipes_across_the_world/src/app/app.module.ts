import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { FoodCardsComponent } from './components/food-cards/food-cards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleComponent } from './components/title/title.component';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component'


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    NavbarComponent,
    FoodCardsComponent,
    CreateFormComponent,
    FoodListComponent,
    TitleComponent,
    CocktailsListComponent

 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
