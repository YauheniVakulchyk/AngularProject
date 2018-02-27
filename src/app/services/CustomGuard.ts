import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthorizationService} from './authorization.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService, private router: Router) {
    console.log('nananan');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const isAuthenticated = this.authorizationService.isAuthenticated();
    if (isAuthenticated === false) {
      this.router.navigate(['/']);
    }
    return isAuthenticated;
  }
}
