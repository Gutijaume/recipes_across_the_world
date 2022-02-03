import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserContact } from 'models/user-contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public userContactForm: FormGroup;
  public submitted: boolean = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()


  }

  public initForm (): void {
    this.userContactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/[a-z]+[A-Z]*/)]],
      mail: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      phone: ['', [Validators.required, Validators.maxLength(9),Validators.minLength(9), Validators.pattern(/[0-9]*/)]],
      subject: ['', [Validators.required, Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.maxLength(100)]]
    });

  }

  public onSubmit(): void {

    this.submitted = true
    if (this.userContactForm.valid){
      const validContactForm : UserContact = {
        name: this.userContactForm.get('name')?.value,
        mail: this.userContactForm.get('mail')?.value,
        phone: this.userContactForm.get('phone')?.value,
        subject: this.userContactForm.get('subject')?.value,
        message: this.userContactForm.get('message')?.value,
      }
      alert("Formulario enviado")
      console.log(validContactForm)
      this.userContactForm.reset()
      this.submitted = false

    }
  }



}
