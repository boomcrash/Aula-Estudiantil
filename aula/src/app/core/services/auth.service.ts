import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  verificarUsuarioPassword(): Observable<any> {    
    const post = {
      nombre_usuario: "admin777",
      contrasena_usuario: "12345678"
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlVerificarUsuarioPassword}`;    
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
