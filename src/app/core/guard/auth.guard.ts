import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // Guard : it's a method so it has different syntax when we use "Router"
  // we should take this guard and put it on parent that contains all paths that i need to protect them => Go to blank path in app routing component

  const _router = inject(Router);

  if(localStorage.getItem('eToken') !==null)
  {
    return true;
  }
  else{
    _router.navigate(['/login']);
    return false;
  }
};
