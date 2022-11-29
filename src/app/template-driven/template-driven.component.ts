import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  form: any = {};

  submitTemplate(form: NgForm): void {
    console.log(this.form);
    console.log(form.valid);
  }
}
