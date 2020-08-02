import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {
  @Input('fCon') formControl: FormControl
  errors={
    'required':"This field is required",
    'email': "A valid email is required",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
