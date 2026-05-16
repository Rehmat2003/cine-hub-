import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector:'app-movie-details',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./movie-details.html',
  styleUrls:['./movie-details.css']
})

export class MovieDetails implements OnInit {

  movie:any;

  constructor(private router: Router){}

  ngOnInit(): void {

    const data = localStorage.getItem('movie');

    if(data){
      this.movie = JSON.parse(data);
    }

  }

  bookNow(){

    this.router.navigate(['/seats']);

  }

}