import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const router = inject(Router)
 
  if (user !== null) {
    const tree: UrlTree = router.createUrlTree(['/'])
    return tree
  }

  return true
};

