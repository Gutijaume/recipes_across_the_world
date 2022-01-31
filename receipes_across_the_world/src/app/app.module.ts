import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodContainerComponent } from 'components/food-cards/food-cards.component';
import { FormularioComponent } from 'components/create-form/create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    NavbarComponent,
    FoodContainerComponent,
    FormularioComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
