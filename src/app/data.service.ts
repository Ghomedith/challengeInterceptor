import { Data } from './model/data.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private Http = inject(HttpClient);

  constructor() { }
  getDatas(): Observable<Data[]>{
    return this.Http.get<Data[]>('assets/data.json');
  }
  
}
