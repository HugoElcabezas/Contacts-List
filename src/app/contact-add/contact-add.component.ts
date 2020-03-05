import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.sass']
})
export class ContactAddComponent implements OnInit {

  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cel: new FormControl(null, [Validators.required]),
      mail: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);

    } else {
      console.log('Tu forma no está completa.');
    }
  }

}
