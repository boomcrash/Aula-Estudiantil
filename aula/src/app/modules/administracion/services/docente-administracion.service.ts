import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocenteAdministracionService {

  constructor(private http: HttpClient) { }

  obtenerTopDocentes(id : string): Observable<any> {  
    const post = {
      ciclo_contrato: id
    }; 
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocenteAdmin.obtenerTopDocentes}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.post(url, post,httpOptions);
  }

  obtenerDocentes(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocenteAdmin.obtenerDocentes}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }

  obtenerPagoDocentes(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocenteAdmin.obtenerPagoDocentes}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }

  obtenerEvaluacionesDocentes(id : number): Observable<any> {   
    const post = {
      docente_curso: id
    }; 
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocenteAdmin.obtenerEvaluacionesDocente}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.post(url, post,httpOptions);
  }
  
}
