import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from './../../interfaces/interface';
import Swal from 'sweetalert2';

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

  vote(id: string) {
    this.movieService.voteMovie(id).subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire({
          title: 'Thanks!',
          text: resp.message,
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      } else {
        Swal.fire({
          title: 'Upss!',
          text: resp.message,
          icon: 'error',
          confirmButtonText: 'ok'
        });

      }
    });
  }

}
