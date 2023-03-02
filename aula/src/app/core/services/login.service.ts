import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuario = 'User';
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
  async login(user: string, contrasena: string): Promise<boolean>{    
    let existe: boolean;
    let existeComprobar: boolean = false;
    await this.autentificar.verificarUsuarioPassword(user,contrasena).toPromise().then( resp =>{
      console.log(resp);
      existe = resp.data.existe;
      console.log(existe);
      if(existe){
        this.usuario = user;
        console.log(user);
        this.cookie.set('active', 'true');
        this.cookie.set('username', user);        
        existeComprobar = true;
        console.log('existe este usuario');
        return true;
      }else{
        return false;
      }
    }).catch(
      err => {
        console.error(err);
        return false;
      }
    ); 
    console.log(existeComprobar, 'mensaje de prueba')
    return existeComprobar;         
  }

  logout(): void {

    this.cookie.set('active', 'false');
    this.cookie.set('username', '');
    this.cookie.set('id', '');
    window.open('/home', '_self');

  }
}
