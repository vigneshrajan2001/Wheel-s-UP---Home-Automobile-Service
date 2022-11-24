import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { bookingModel } from './booking/booking.model';

const baseUrl = 'http://localhost:7200/api/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient,private router:Router) { }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAll(): Observable<bookingModel[]> {
    return this.http.get<bookingModel[]>(baseUrl);
  }
}