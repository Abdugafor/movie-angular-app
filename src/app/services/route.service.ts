import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  previousRoute: string

  constructor() { }

  setPreviousRoute(route: string) {
    this.previousRoute = route
  }

  getPreviousRoute() {
    return this.previousRoute
  }
}
