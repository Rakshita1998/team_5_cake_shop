import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL= "http://localhost:3000/cakeShop"

  constructor(private _http:HttpClient) { }
  getHome(){
    return this._http.get(this.URL);

  }
}
