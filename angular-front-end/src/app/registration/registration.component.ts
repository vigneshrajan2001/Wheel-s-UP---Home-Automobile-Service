import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'registration.model';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  registration:Registration={
    fullname:'',
    email:'',
    password:'',
  }
  registered=false;
  constructor(private router:Router,private registrationService:RegistrationService) { }

  signUp(): void{
    const data={
      fullname:this.registration.fullname,
      email:this.registration.email,
      password:this.registration.password,
    };
    this.registrationService.create(data)
    .subscribe({
      next:(res)=>{
        this.registered=true;
        alert("Registration Successful")
      },
      error:(e) => console.error(e)
    });
    this.router.navigate(['login']);
  }
}