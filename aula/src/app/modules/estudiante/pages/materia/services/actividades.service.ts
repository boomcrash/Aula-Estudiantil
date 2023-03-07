import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActividadesModel } from '../../../models/actividadesModel';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  public presentarEdicion: boolean = true; 
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

  modificarActividad(actividad : ActividadesModel): Observable<any> {    
    const body = {
      id_actividad: actividad.id_actividad,
      fechaVencimiento_actividad: actividad.fechaVencimiento_actividad,
      fechaPublicacion_actividad: actividad.fechaPublicacion_actividad,
      nombre_actividad: actividad.nombre_actividad,
      descripcion_actividad: actividad.descripcion_actividad,
      archivosPermitidos_actividad: actividad.archivosPermitidos_actividad,
      tipo_actividad: actividad.tipo_actividad
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocentes.modificarActividad}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.put(url, body, httpOptions);
  }
}
