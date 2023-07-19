import { CanActivateFn } from '@angular/router';

export const userProfileGuard: CanActivateFn = (route, state) => {
  return false;
};
