import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteAdministracionService {

  constructor(private http: HttpClient) { }

  obtenerTopEstudiantes(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.urlEstudianteAdmin.obtenerTopEstudiantes}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }
  
  obtenerEstudiantes(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.urlEstudianteAdmin.obtenerEstudiantes}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }
  
  obtenerMateriasEstudiantes(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.urlEstudianteAdmin.obtenerMedioEstudiante}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }
  obtenerActividadesCEstudiantes(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.urlEstudianteAdmin.obtenerMedioEstudiante}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }

  obtenerActividadesNCEstudiantes(): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.urlEstudianteAdmin.obtenerMedioEstudiante}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }
}
