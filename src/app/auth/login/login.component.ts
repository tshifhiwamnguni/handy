import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';









@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.type = 'customer'
    this.Form = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
   
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    })
  }
  constructor(private formBuilder: FormBuilder,
    private authenticateService: AuthService,
    private router:Router,
    private store : StoreService,
    private activeRoute:ActivatedRoute,
  
   ) { }

  
  submitted = false;
   


  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
 
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }


  userType: any;
  myData!: any;
  fullname: any;
  email: any;
  id:any

  onSubmit(): void {
   
    this.submitted = true;

    if(this.type=='handyman'){
      let sp = {
        email: this.Form.value.email,
        password: this.Form.value.password,
      };
      console.log(sp);
       this.authenticateService.loginSp(sp).subscribe(data=>{
        console.log(data.arrData[0]);
        this.store.currentUser =data.arrData[0];
        this.router.navigateByUrl('/sphome') 
       },
        (err) =>{
         
        }
      )
    }else if(this.type=='customer'){
      let user = {
        email: this.Form.value.email,
        password: this.Form.value.password,
      };
        console.log(user);
        
       this.authenticateService.loginUser(user).subscribe(data=>{
        this.store.currentUser =data.arrData[0];
        this.router.navigateByUrl('/home') 
       },
       (err) =>{
          
       })
      
    }
   
  }  
    type = "customer"
  select(e:any){
    this.type = e.target.value
    console.log(e.target.value);
    
  }




 
}
