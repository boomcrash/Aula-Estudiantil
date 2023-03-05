import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  obtenerCurso(estudiante_matricula: number): Observable<any> {    
    const post = {
      estudiante_matricula
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlObterCursoEstudiante}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url, post);
    return this.http.post(url, post,httpOptions);
  }
}