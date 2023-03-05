import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private http: HttpClient) { }

  obtenerActividades(curso_actividad: number): Observable<any> {    
    const post = {
      curso_actividad
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlObtenerActividades}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url, post);
    return this.http.post(url, post,httpOptions);
  }

  obtenerEntregas(): Observable<any> {    
    const url = `${environment.urlBAse}/api/v1/entregas/getEntregas`;      
    return this.http.get(url);
  }
}
