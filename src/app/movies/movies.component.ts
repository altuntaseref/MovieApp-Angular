import { Component, OnInit } from '@angular/core';
import {Movie} from "../models/movie";
import {MovieRepository} from "../models/movie.repository";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {



  //movies = ["film 1","film 2","film 3","film 4"]

  movies: Movie[] ;
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  filterText: string= "de";
  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }



  ngOnInit(): void {
  }

}
