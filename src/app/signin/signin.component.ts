import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Signin } from './signin';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
pageTitle :string='Sign In';

signinForm:FormGroup; 

signin=new Signin();
  constructor(private fb: FormBuilder,  private route: ActivatedRoute,
    private router: Router,) { }

    
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      userName:['', [Validators.required, Validators.minLength(3)]],
      password :'',
    })
  }
  
}
