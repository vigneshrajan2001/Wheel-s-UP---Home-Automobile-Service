import { Component, OnInit } from '@angular/core';
import { bookingModel } from '../booking/booking.model';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings?:bookingModel[];
  currentBooking : bookingModel={};
  constructor(private bookingService:BookingService) { }

  ngOnInit(): void {
    this.retrievebookings();
  }
  retrievebookings():void{
    this.bookingService.getAll()
      .subscribe({
        next: (data) => {
          this.bookings = data;
        },
        error: (e) => console.error(e)
      });
  }
}
