import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-panel',
  standalone: true,
  templateUrl: './checkout-panel.html',
  styleUrls: ['./checkout-panel.css']
})
export class CheckoutPanel {

  movie:any;
  time:any;
  seats:any;

  total = 0;

  ngOnInit(){

    this.movie =
    JSON.parse(localStorage.getItem('movie') || '{}');

    this.time =
    localStorage.getItem('time');

    this.seats =
    JSON.parse(localStorage.getItem('seats') || '[]');

    this.total = this.seats.length * 200;
  }

  confirmBooking(){
    alert('Booking Confirmed');
  }
}