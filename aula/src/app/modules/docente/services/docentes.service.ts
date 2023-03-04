import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActividadModel } from '../models/actividadModel';


@Injectable({
  providedIn: 'root'
})
export class DocentesService {
  private update: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public getUpdate(): Observable<boolean> {
    return this.update.asObservable();
  }

  public sendUpdate(value: boolean): void {
    this.update.next(value);
  }

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

    return this.http.post(url, post,httpOptions);
  }

  obtenerIdDocente(id : number): Observable<any> {    
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocetes.obtenerIdDocente}` + id;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }

    return this.http.get(url,httpOptions);
  }

  modificarActividad(actividad : ActividadModel): Observable<any> {    
    const body = {
      id_actividad: actividad.id_actividad,
      fechaVencimiento_actividad: actividad.fechaVencimiento_actividad,
      fechaPublicacion_actividad: actividad.fechaPublicacion_actividad,
      nombre_actividad: actividad.nombre_actividad,
      descripcion_actividad: actividad.descripcion_actividad,
      archivosPermitidos_actividad: actividad.archivosPermitidos_actividad,
      tipo_actividad: actividad.tipo_actividad
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocetes.modificarActividad}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.put(url, body, httpOptions);
  }

  agregarActividad(actividad : ActividadModel): Observable<any> {    
    const body = {
      curso_actividad: actividad.curso_actividad,
      fechaVencimiento_actividad: actividad.fechaVencimiento_actividad,
      fechaPublicacion_actividad: actividad.fechaPublicacion_actividad,
      nombre_actividad: actividad.nombre_actividad,
      descripcion_actividad: actividad.descripcion_actividad,
      archivosPermitidos_actividad: actividad.archivosPermitidos_actividad,
      tipo_actividad: actividad.tipo_actividad
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocetes.agregarActividad}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(actividad)
    return this.http.post(url, body, httpOptions);
  }

}
