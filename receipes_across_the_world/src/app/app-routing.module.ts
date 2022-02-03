import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { FoodCardsComponent } from './components/food-cards/food-cards.component';
import { FoodListComponent } from './components/food-list/food-list.component';


const routes: Routes = [

  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'contact', component: ContactFormComponent},
  { path: 'main', component: FoodCardsComponent},
  { path: 'home', component: FoodCardsComponent},
  { path: 'create', component: CreateFormComponent },
  { path: 'about', loadChildren: () =>import('./pages/about/about.module').then(m => m.AboutModule)},
  { path: 'chicken-meals', component: FoodListComponent },
  { path: 'cocktails', component: CocktailsListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
