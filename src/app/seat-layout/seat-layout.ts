import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-seat-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-layout.html',
  styleUrls: ['./seat-layout.css']
})

export class SeatLayout {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  seats = Array.from({ length: 40 }, (_, i) => ({

    number: i + 1,

    booked: false

  }));

  selectedSeats: number[] = [];

  selectSeat(seat: any) {

    seat.booked = !seat.booked;

    if (seat.booked) {

      this.selectedSeats.push(seat.number);

    } else {

      this.selectedSeats =
      this.selectedSeats.filter(
        s => s !== seat.number
      );

    }
  }

  payAndBook() {

  const token = localStorage.getItem('token');

  console.log('TOKEN:', token);

  const bookingData = {
    showtimeId: 7,
    seatIds: this.selectedSeats,
    paymentMethod: 'UPI'
  };

  const headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  });

  this.http.post<any>(
    'https://localhost:7086/api/Bookings',
    bookingData,
    { headers }
  ).subscribe({

    next: (res) => {

      console.log(res);

      alert('Booking Successful ✅');

    },

    error: (err) => {

      console.log(err);

      console.log(err.error);

      alert(JSON.stringify(err.error));

    }

  });

}

}