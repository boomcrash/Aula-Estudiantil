import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocenteAdministracionService {

  constructor(private http: HttpClient) { }

  obtenerDocentes(id : number): Observable<any> {    
    const post = {
      docente: id
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlDocenteAdmin.obtenerDocentes}`;    
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
