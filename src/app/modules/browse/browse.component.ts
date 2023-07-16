import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {
  movies: any = []

  constructor(private httpService: HttpService) {}



}
