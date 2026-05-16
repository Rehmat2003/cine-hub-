import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  apiUrl = 'https://localhost:7086/api/Bookings';

  constructor(private http: HttpClient){}

  bookSeats(data:any){

    return this.http.post(
      this.apiUrl,
      data
    );

  }

}