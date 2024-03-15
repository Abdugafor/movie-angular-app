import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(DatabaseService)
  const router = inject(Router)
  const user = authService.auth
  
  if (user  !== null) {
    const tree: UrlTree = router.createUrlTree(['/'])
    return tree
  }

 
  return false
};

