import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  constructor(private http: HttpClient) { }

  obtenerCursos(id : number): Observable<any> {    
    const post = {
      docente_curso: id
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocetes.obtenerCursos}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url, post);
    return this.http.post(url, post,httpOptions);
  }

  obtenerActividades(id : number): Observable<any> {    
    const post = {
      curso_actividad: id
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocetes.obtenerActividades}`;    
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
