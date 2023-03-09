import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class matriculacionService {

  constructor(private http: HttpClient) { }

  obtenerHorariosmatricula(): Observable<any> {        
    const url = `${environment.urlBAse}${environment.pathUrl.urlObtenerHorariosmatricula}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }  

  obtenercurso(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.UrlObtenerCursos}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }  

  obtenerParalelo(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.UrlObtenerParalelos}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }
 obtenerMaterias(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.UrlObtenerMaterias}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }

  obtenerActaEstudiante(estudiante_itemActa: number): Observable<any> {    
    const post = {
      estudiante_itemActa
    };
    const url = `${environment.urlBAse}${environment.pathUrl.UrlObtenerActaByEstudiante}`;    
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
