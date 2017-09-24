import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Movie } from './movie.model';

@Injectable()
export class MovieService {
  moviesChanged = new Subject<Movie[]>();

  private movies: Movie[] = [
    new Movie(
      'Titanic', '195', 'Leonardo DiCaprio and Kate Winslet', 'James Cameron',
      'Titanic is a 1997 American epic romance-disaster film directed, written, co-produced and co-edited by James Cameron. A fictionalized account of the sinking of the RMS Titanic, it stars Leonardo DiCaprio and Kate Winslet as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage.',
      'https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg'),
    new Movie(
      'The Wolverine', '126', 'Hugh Jackman and Hiroyuki Sanada', 'James Mangold',
      'The Wolverine is a 2013 superhero film featuring the Marvel Comics character Wolverine. The film, distributed by 20th Century Fox, is the sixth installment in the X-Men film series. Hugh Jackman reprises his role from previous films as the title character, with James Mangold directing a screenplay written by Scott Frank and Mark Bomback, based on the 1982 limited series Wolverine by Chris Claremont and Frank Miller. In the film, which follows the events of X-Men: The Last Stand, Logan travels to Japan, where he engages an old acquaintance in a struggle that has lasting consequences. Stripped of his healing factor, Wolverine must battle deadly samurai while struggling with guilt.',
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/The_Wolverine_posterUS.jpg/220px-The_Wolverine_posterUS.jpg'),
    new Movie(
      'Angela', '99', 'Miranda Stuart Rhyne and Charlotte Eve Blythe', 'Rebecca Miller',
      'Angela is a 1995 film, Rebecca Millers directorial debut. It won awards at the Sundance Film Festival, the Brussels International Festival of Fantasy Film and the Gotham Awards.',
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Angela_poster.jpg/220px-Angela_poster.jpg'),
  
  ];

  constructor() {}

  getMovies() {
    return this.movies.slice();
  }

  getMovie(index: number) {
    return this.movies[index];
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
    this.moviesChanged.next(this.movies.slice());
  }

  updateMovie(index: number, newMovie: Movie) {
    this.movies[index] = newMovie;
    this.moviesChanged.next(this.movies.slice());
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
    this.moviesChanged.next(this.movies.slice());
  }
}
