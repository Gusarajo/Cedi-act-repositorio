import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  nombre = new FormControl('');
  Edad = new FormControl('');
  email = new FormControl('');
  Name = new FormControl('');
  Age = new FormControl('');
  correo = new FormControl('');
  constructor() { }
  buttonclick() {

    this.Name.setValue(this.nombre.value);
    this.Age.setValue(this.Edad.value);
    this.correo.setValue(this.email.value);
    this.nombre.setValue('');
    this.Edad.setValue('');
    this.email.setValue('');


  }
}
