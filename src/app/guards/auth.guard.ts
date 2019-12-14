import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router, private authService: AuthService) {}
  canActivate(): Observable<boolean> {
    
    return this.authService.user().pipe(
       map(auth => {
        if(!auth) {
            this.router.navigate(['/login'])
           return false;
        }else {
          return true;
        }
       })
     )
  }
}
