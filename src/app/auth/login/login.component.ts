import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.type = 'customer'
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
    });
  }
  constructor(private formBuilder: FormBuilder,
    private authenticateService: AuthService,
    private router:Router,
    private activeRoute:ActivatedRoute,) { }

  
  submitted = false;
 


  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
 
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }
  onSubmit(): void {
    console.log("ues");
    this.submitted = true;

    if(this.type=='handyman'){
      let sp = {
       
        email: this.Form.value.email,
 
        password: this.Form.value.password,
      };
      console.log(sp);
       this.authenticateService.loginSp(sp).subscribe(err=>{
        //  this.router.navigateByUrl('/home')
       })
    }else if(this.type=='customer'){
      let user = {
        email: this.Form.value.email,
        password: this.Form.value.password,
      };
        console.log(user);
        
       this.authenticateService.loginUser(user).subscribe(err=>{
        this.router.navigateByUrl('/home') 
       })
    }
   
  }  
    type = "customer"
  select(e:any){
    this.type = e.target.value
    console.log(e.target.value);
    
  }
 
}
