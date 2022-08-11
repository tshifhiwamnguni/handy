import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
   constructor(private formBuilder: FormBuilder, private authenticateService: AuthService){}
   submitted = false;
   isSuccessful = false;
   isSignUpFailed = false;
   errorMessage = '';

  //firstname,lastname,email,jobtype,city,avgrate,phonenumber,password
  Form = new FormGroup({
    firstname : new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    jobtype: new FormControl(''),
    city: new FormControl(''),
    avgrate: new FormControl(''),
    phonenumber: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl('')

  })
  get f(): { [key: string]: AbstractControl } {
    return this.Form.controls;
  }
  ngOnInit(): void {
    this.type = 'customer'
    this.Form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jobtype: ['',Validators.required],
      city: ['',Validators.required],
      avgrate: ['',Validators.required],
      phonenumber: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'),
          Validators.maxLength(12),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      confirmpassword: ['', Validators.required],

    });
  }
  onSubmit(): void {
    console.log("ues");
    this.submitted = true;

    if(this.type=='handyman'){
      let sp = {
        firstname: this.Form.value.firstname,
        lastname: this.Form.value.lastname,
        email: this.Form.value.email,
        jobtype: this.Form.value.jobtype,
        city: this.Form.value.city,
        avgrate: this.Form.value.avgrate,
        phonenumber: this.Form.value.phonenumber,
        password: this.Form.value.password,
      };
  
       this.authenticateService.registerSp(sp).subscribe(err=>{
        
       })
    }else if(this.type=='customer'){
      let user = {
        firstname: this.Form.value.firstname,
        lastname: this.Form.value.lastname,
        email: this.Form.value.email,
        city: this.Form.value.city,
        phonenumber: this.Form.value.phonenumber,
        password: this.Form.value.password,
      };
  
       this.authenticateService.registerUser(user).subscribe(err=>{
        
       })
    }
   
  }  
  type = "customer"
  select(e:any){
    this.type = e.target.value
    console.log(e.target.value);
    
  }
}
