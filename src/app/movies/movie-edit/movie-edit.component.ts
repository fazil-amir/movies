import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  id: number;
  editMode = false;
  movieForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.movieService.updateMovie(this.id, this.movieForm.value);
    } else {
      this.movieService.addMovie(this.movieForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let movieTitle = '';
    let movieDuration = '';
    let movieActors = '';
    let movieDirectors = '';
    let movieDescription = '';
    let movieImagePath = '';

    if (this.editMode) {
      const movie = this.movieService.getMovie(this.id);
      movieTitle = movie.title;
      movieDuration = movie.duration;
      movieActors = movie.actors;
      movieDirectors = movie.directors;
      movieDescription = movie.description;
      movieImagePath = movie.imagePath;
    }

    this.movieForm = new FormGroup({
      'title': new FormControl(movieTitle, Validators.required),
      'duration': new FormControl(movieDuration, Validators.required),
      'actors': new FormControl(movieActors, Validators.required),
      'directors': new FormControl(movieDirectors, Validators.required),
      'description': new FormControl(movieDescription, Validators.required),
      'imagePath': new FormControl(movieImagePath, Validators.required),
    });
  }

}
