import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';


export const userProfileGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot,) => {
  return true
};
