import { Routes } from '@angular/router';

import { Layout } from './layout/layout';
import { Login } from './login/login';
import { MovieList } from './movie-list/movie-list';

export const routes: Routes = [

  {
    path:'',
    component:Layout,

    children:[

      {
        path:'',
        redirectTo:'movies',
        pathMatch:'full'
      },

      {
        path:'login',
        component:Login
      },

      {
        path:'movies',
        component:MovieList
      },

      {
        path:'seats',
        loadComponent: () =>
          import('./seat-layout/seat-layout')
          .then(m => m.SeatLayout)
      },
      {
        path:'details',
        loadComponent: () =>
        import('./movie-details/movie-details')
        .then(m => m.MovieDetails)
}

    ]
  }

];