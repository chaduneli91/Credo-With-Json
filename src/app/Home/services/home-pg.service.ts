import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredoInterface } from '../models/item.models';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomePgService {

  constructor( private _http: HttpClient ) { }

  getHome(): Observable<CredoInterface >{
    return this._http.get<CredoInterface>(`assets/main.json`)
  }; 
}
