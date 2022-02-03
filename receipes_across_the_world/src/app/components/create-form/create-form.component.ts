import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { dishModel } from 'models/food-divs';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']

})export class CreateFormComponent implements OnInit {
  @Output() sendDish = new EventEmitter<dishModel>()

  public createForm: FormGroup;
  public submitted: boolean = false


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm()
  }

  public initForm (): void {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      img: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      ingredients: ['', [Validators.required, Validators.maxLength(100)]],
      flag: ['',]
    });
  }

  public addNewDish(): void {
    this.submitted = true

    if (this.createForm.valid){
      const ing = this.createForm.get('ingredients')?.value
      const ingredients = ing.split (", ")
      debugger
      const newDish : dishModel = {
        name: this.createForm.get('name')?.value,
        img: this.createForm.get('img')?.value,
        description: this.createForm.get('description')?.value,
        ingredients: ingredients,
        flag: this.createForm.get('flag')?.value
      }

      alert ("Nuevo Plato añadido")
      console.log(newDish)
      this.sendDish.emit(newDish)
      this.createForm.reset()
      this.submitted = false
    }

  }
}






















