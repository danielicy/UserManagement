import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api/api-http.service';
import { catchError, map } from 'rxjs/operators';
import {  Observable, throwError  } from 'rxjs';
import { AppError } from '../../error-handling/app-error';
/*import { ServiceType } from 'src/app/shared/enums/ServiceType';
import jwt_decode from 'jwt-decode';*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiHttpService: ApiHttpService) { }


  login(credentials: any): boolean {
    /*return this.apiHttpService.post('users/login',
      credentials)
       .pipe(
         map((response: any) => {
          const result = response;
          if (result && result.token){
            localStorage.setItem('token', result.token);
            return true;
          }
          return false;
         }),
           catchError(this.handleError)
       );*/

       return true;
   }

   logout(): void {
    localStorage.removeItem('token');
   }

   isLoggedIn(): boolean{


     // let jwtHelper = new JwtHelper();


     if (!this.decodedToken) {
     return false;
     }



    // let expirationDate =  decoded.exp;
    /* let isExpired = jwtHelper.isTokenExpired(token);

     console.log("Expiration",expirationDate);
     console.log("isExpired",isExpired);
     return !isExpired;*/
     return true;
   }

   get currentUser(): {admin: string,
                        exp: number}{
      const user = this.decodedToken;

      return user as any;
   }

   get decodedToken(): {}{
    const token = localStorage.getItem('token') ?? '';


    if (!token) {
    return false;
    }

    /*const decoded = jwt_decode(token);


    return decoded;*/
    return true;

   }

   private handleError(error: Response): Observable<never>{
    /*if(error.status === 404)
      return throwError( new NotFoundError());

    if (error.status === 400)
      return throwError(new BadInput(error));
*/
     return throwError(new AppError(error));
  }
}
