import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Forgot } from './forgot';



@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotForm:FormGroup;

  forgot=new Forgot();

  constructor(private fb: FormBuilder,) { }
pageTitle :string = 'Reset your Password';

ngOnInit(): void {
  this.forgotForm = this.fb.group({
   email:['', [Validators.required, Validators.email]],

  })
}
}
