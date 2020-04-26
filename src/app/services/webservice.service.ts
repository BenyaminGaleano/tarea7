import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from '../models/estudiante';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

const dominio = environment.path;
const header = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http: HttpClient) { }

  guardar(datos: Estudiante): Observable<any> {
    console.log(datos);
    return this.http.post(dominio + '/nota', datos, header);
  }

  notas(): Observable<any> {
    return this.http.get(dominio + '/notas', header);
  }
}
