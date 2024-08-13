import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: any[] = [];

  constructor(private Fb: FormBuilder) {}

  FormValidation = this.Fb.group({
    'Tittle': new FormControl('', Validators.required),
    'Description': new FormControl('', Validators.required)
  });

  get Tittle() {
    return this.FormValidation.get('Tittle') as FormControl;
  }
  get Description() {
    return this.FormValidation.get('Description') as FormControl;
  }



  Send() {
    const newTask = {
      ...this.FormValidation.value,
      Done: false
    };
    this.tasks.push(newTask);
    console.log(this.tasks);
    this.FormValidation.reset();
  }
}