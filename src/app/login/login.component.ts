import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest,LoginResponse } from '../model/login.model';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;

  constructor(private formBuilder:FormBuilder,private LoginService:LoginService,private router:Router) {
      //formBuild.array([]);
      this.formLogin=this.formBuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required,Validators.minLength(5)]
      });
      console.log(this.formLogin);
  }


  ngOnInit(): void {
  }

  loginClick(){
    const email=this.formLogin.get('email')?.value;
    const password =this.formLogin.get('password')?.value
    //console.log('email',email);
    //console.log('password',password);
    const data= new LoginRequest();
    data.email=email;
    data.password=password;

    this.LoginService.login(data).subscribe(value =>{
      if(value.token){
        this.router.navigate(['home']);
      }
    }, error=>{
      console.log(error);
      alert(error.error.error);
    });

  }
}
