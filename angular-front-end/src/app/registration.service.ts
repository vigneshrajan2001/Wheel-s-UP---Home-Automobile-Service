import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from 'registration.model';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:8080/api/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient,private router:Router) { }


  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAll():Observable<Registration[]>{
    return this.http.get<Registration[]>(baseUrl)
  }
  logging(email:any):Observable<Registration[]>{
    return this.http.get<Registration[]>(`${baseUrl}?email=${email}`);
  }
}