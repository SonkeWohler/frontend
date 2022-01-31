import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private url = "http://127.0.0.1:5000/hello"

  constructor( private http: HttpClient,) { }

  getHello(): Observable<Object> {
    return this.http.get<Object>(this.url);
  }

}
