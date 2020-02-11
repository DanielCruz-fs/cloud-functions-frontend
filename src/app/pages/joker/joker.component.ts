import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from './../../interfaces/interface';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.css']
})
export class JokerComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getNominated().subscribe(resp => {
      console.log(resp);
      this.movies = resp;
    });
  }

}
