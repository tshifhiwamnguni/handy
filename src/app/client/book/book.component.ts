import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
     private req: RequestService ,
      private store: StoreService,

    ){}
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

 //firstname,lastname,email,jobtype,city,avgrate,phonenumber,password
 Form = new FormGroup({
 
   email: new FormControl(''),
   description: new FormControl(''),

   phonenumber: new FormControl(''),


 })
 get f(): { [key: string]: AbstractControl } {
   return this.Form.controls;
 }
 spdetails:any
 ngOnInit(): void {
  this.spdetails = this.store.spDetails
   this.Form = this.formBuilder.group({
   
     email: ['', [Validators.required, Validators.email]],
     description: ['',Validators.required],
     
     phonenumber: [
       '',
       [
         Validators.required,
         Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'),
         Validators.maxLength(12),
       ],
     ],
    
   });
 }
 onSubmit(): void {
   this.submitted = true;
  let book={
    description: this.Form.value.description,
    spname: this.spdetails.spname,
    useremail: this.Form.value.email,
    psemail: this.spdetails.spemail,
    phonenumber: this.Form.value.phonenumber,

  }
  this.req.addrequest(book).subscribe(err=>{
        console.log(err);
        
  })
  
 }  

 

}
