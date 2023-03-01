import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookie: CookieService,private autentificar: AuthService) { }
  
  getActive(): boolean {
    return this.cookie.get('active') === 'true';
  }

  
  getLoggedUsername(): string {
    return this.cookie.get('username');
  }


  getLoggedUserId(): number {
    return Number(this.cookie.get('id'));
  }
  login(user: string, contrasena: string): boolean{
    let existe: boolean = false;
    this.autentificar.verificarUsuarioPassword(user,contrasena).toPromise().then( resp =>{
      console.log(resp);
      existe = resp.data.existe;
      if(existe){
        return existe
      }else{
        return false;
      }
    }).catch(
      err => {
        console.error(err);
        return false;
      }
    );      
    return false;
  }

  logout(): void {

    this.cookie.set('active', 'false');
    this.cookie.set('username', '');
    this.cookie.set('id', '');
    window.open('/inicio', '_self');

  }
}
