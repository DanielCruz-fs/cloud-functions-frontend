import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Movie } from 'src/app/interfaces/interface';
import 'firebase/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore
        .collection('joker')
        .valueChanges().pipe( map( (resp: Movie[]) => resp.map( ({name, votes}) => ({name, value: votes}) )) )
        // .valueChanges().pipe(
        //   map( (resp: Movie[]) => {
        //     return resp.map( movie => {
        //       return { name: movie.name, value: movie.votes}
        //     });
        //   })
        // )
        .subscribe(resp => { 
          console.log(resp);
          this.movies = resp;
        });
  }

}
