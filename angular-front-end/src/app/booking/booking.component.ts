import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup}from '@angular/forms'
import { Router } from '@angular/router';
import { bookingModel } from './booking.model';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  formValue !: FormGroup;
  bookingModelobj : bookingModel = new bookingModel();
  constructor(private formbuilder: FormBuilder,private bookingService:BookingService,private router:Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Vehicle:[''],
      Vehiclemanufacturer:[''],
      Vehiclemodel:[''],
      Mobilenum:[''],
      Address:[''],
      Fueltype:[''],
      Servicedate:[''],
    })
  }

  postEmployeeDetails():void{
    this.bookingModelobj.Vehicle=this.formValue.value.Vehicle;
    this.bookingModelobj.Vehiclemanufacturer=this.formValue.value.Vehiclemanufacturer;
    this.bookingModelobj.Vehiclemodel=this.formValue.value.Vehiclemodel;
    this.bookingModelobj.Mobilenum=this.formValue.value.Mobilenum;
    this.bookingModelobj.Address=this.formValue.value.Address;
    this.bookingModelobj.Fueltype=this.formValue.value.Fueltype;
    this.bookingModelobj.Servicedate=this.formValue.value.Servicedate;
    const data=this.bookingModelobj
    this.bookingService.create(data)
    .subscribe({
      next:(res) =>{
        this.formValue.reset();
        alert("Booking Successful")
      },
      error:(e) => console.error(e)
    })
  }
  
}
