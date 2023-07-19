import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (private router: Router, private databaseService: DatabaseService) {}

  onNavigateUser() {
    const user = this.databaseService.getUserState()

    if (user !== null) {
      this.router.navigate(['profile'])
    }else {
      this.router.navigate(['login'])
    }
  }

  onNavigateBack() {
    this.router.navigate(['../'])
  }
}
