import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RightContainerInterface } from '../../Home/models/item.models';

@Injectable({
  providedIn: 'root'
})
export class RightNavService {

  constructor( private _http: HttpClient) { }

  getMain(): Observable <RightContainerInterface>{
    return this._http.get<RightContainerInterface>(`assets/main.json`)
  };

  
}
