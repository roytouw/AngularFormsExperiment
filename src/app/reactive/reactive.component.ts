import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    telephone: ['', [Validators.required, Validators.minLength(4)]],
    test: [
      new FormControl<string>('', { nonNullable: true }),
      [Validators.required],
    ],
  });

  constructor(readonly fb: NonNullableFormBuilder) {
    const x = this.form.get('test');
    const result = x!.value;
  }

  reactiveSubmit(): void {
    console.log(this.form.value);
    console.log(this.form.valid);
  }
}
