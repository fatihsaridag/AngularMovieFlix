import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})  
export class SearchComponent implements OnInit {

constructor(private service:MovieApiServiceService){}

searchResult : any;
 
ngOnInit(): void {

}



searchForm = new FormGroup({
  'movieName':new FormControl(null)
});

  submitForm(){
    console.log(this.searchForm.value , 'searchForm#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result,'searchmovie##')
      this.searchResult = result.results;
    })
  }


}
