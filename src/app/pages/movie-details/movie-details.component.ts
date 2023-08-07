import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service : MovieApiServiceService , private router : ActivatedRoute) {
      
  }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getParamid#');
    
    this.getMovie(getParamId);

  }


  getMovie(id: any){
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result , 'getMovieDetails#');
    })
  }


}
