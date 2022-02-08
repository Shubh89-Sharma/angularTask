import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl = environment.url;

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
* @method
* @name addUser
* @description
* Add the user.
* Request body:json {
       'email': string,
       'firstName': string,
       'lastName': string,
       'mobileNo': integer
* }
* @param context The Add users parameters.
* @return Promise.
*/
addUser(context) {
  return this.httpClient.post(this._baseUrl + `create`, context).pipe(
    map((response: any) => {
      return response;
    }),
    
  );
}


 /**
* @method
* @name getAllUsers
* @description
* Get all the user.
*/
getAllUsers(param?){
  let params = new HttpParams();
    if (param) {
      for (let key of Object.keys(param)) {
        params = params.set(key, param[key])
      }
    }
    return this.httpClient.get(this._baseUrl + 'employees', { params: params }).pipe(
          map((response: any) => {
            return response;
          }),
          
        );
}

uploadImage(fileToUpload: File) {
  const endpoint = 'assets/images/'; 
  const formData: FormData = new FormData();
  formData.append('data', fileToUpload, fileToUpload.name);
  return this.httpClient.post(endpoint, formData).pipe(
    map((response: any) => {
      return response;
    }),
  
  )
}



}
