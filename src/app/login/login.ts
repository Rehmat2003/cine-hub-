import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {

  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {

    this.http.post<any>(
      'https://localhost:7086/api/Auth/login',
      {
        email: this.email,
        password: this.password
      }
    ).subscribe({

      next: (res) => {

        console.log(res);

        localStorage.setItem('token', res.token);

        alert('Login Success ✅');

        this.router.navigate(['/seats']);

      },

      error: (err) => {

        console.log(err);

        alert('Login Failed ❌');

      }

    });

  }

}