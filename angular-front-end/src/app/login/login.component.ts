import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Registration } from 'registration.model';
import { FormBuilder } from '@angular/forms';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  currentUser?:Registration[];
  email='';
  password='';
  constructor(private route:ActivatedRoute, private router: Router,private formBuilder:FormBuilder, private registrationService:RegistrationService, private bookingService:BookingService) { }
 ngOnInit(): void {
   this.retrieveUsers();
}
retrieveUsers():void{
  this.registrationService.getAll()
  .subscribe({
    next:(data) =>{
      this.currentUser=data;
    },
    error:(e) => console.error(e)
  })
}
login():void{
  this.registrationService.logging(this.email)
  .subscribe(res=>{
    const User=res.find((a:any)=>{
      return a.email===this.email && a.password===this.password;
    });
    
    if (User) {
      alert("Login Successful")
      this.router.navigate(['home'])
    } else {
      alert("User Not Found")
     
    }
  });

}
}
