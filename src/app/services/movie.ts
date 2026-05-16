import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  apiUrl = 'https://localhost:7086/api/Movies';

  constructor(private http: HttpClient){}

  getMovies(){

    return this.http.get(this.apiUrl);

  }

}