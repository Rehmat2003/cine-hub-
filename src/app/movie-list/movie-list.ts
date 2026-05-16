import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector:'app-movie-list',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./movie-list.html',
  styleUrls:['./movie-list.css']
})

export class MovieList {

  constructor(private router: Router){}

  movies = [

    {
    title:'Avengers Endgame',
    language:'English',
    image:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1974'
  },

  {
    title:'KGF Chapter 2',
    language:'Kannada',
    image:'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1974'
  },

  {
    title:'Pushpa 2',
    language:'Telugu',
    image:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1974'
  },

  {
    title:'RRR',
    language:'Telugu',
    image:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1974'
  },

  {
    title:'Jawan',
    language:'Hindi',
    image:'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974'
  },

  {
    title:'Leo',
    language:'Tamil',
    image:'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1974'
  },

  {
    title:'Interstellar',
    language:'English',
    image:'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=1974'
  },

  {
    title:'Bahubali 2',
    language:'Telugu',
    image:'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1974'
  },

  {
    title:'Salaar',
    language:'Kannada',
    image:'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1974'
  },

  {
    title:'Spider Man No Way Home',
    language:'English',
    image:'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=1974'
  },

  {
    title:'Kantara',
    language:'Kannada',
    image:'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1974'
  },

  {
    title:'Dune Part 2',
    language:'English',
    image:'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1974'
  }
  ];

  bookMovie(movie:any){

    localStorage.setItem(
      'movie',
      JSON.stringify(movie)
    );

    this.router.navigate(['/details']);

  }

}