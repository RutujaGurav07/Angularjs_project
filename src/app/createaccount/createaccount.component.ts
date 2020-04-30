import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Createaccount } from "./createaccount";


function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl = c.get('password');
  const confirmControl = c.get('confirmPassword');
  if (passwordControl.value === confirmControl.value) {
    return null; 
  }
  return { 'match': true };
}

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
  pageTitle:string="Create Your Account";
createaccountForm : FormGroup;

createaccount=new Createaccount();

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.createaccountForm = this.fb.group({
      
      email:['', [Validators.required, Validators.email]],
      userName:['', [Validators.required, Validators.minLength(3)]],
      
      passwordGroup: this.fb.group({
        password:['', [Validators.required]],
        confirmPassword:['', Validators.required]
      },{validators: passwordMatcher}),

     })
  }

}
