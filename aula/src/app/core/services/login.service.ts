import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DatosUser } from '../interfaces/datosSimplesUser.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuario = 'User';
  datosUsuario: DatosUser[] = [];
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
    await this.autentificar.verificarUsuarioPassword(user,contrasena).toPromise().then( async resp =>{      
      existe = resp.data.existe;  
      console.log(existe);
      if(existe){
        this.usuario = user;
        console.log(user);
        this.cookie.set('active', 'true');
        this.cookie.set('username', user);    
        await this.autentificar.obtenerDatosSimplesUsuario(user).toPromise().then( resp =>{
          this.datosUsuario = resp.data;                 
          this.cookie.set('rol', this.datosUsuario[0].rol_usuario.toString());
          this.cookie.set('id', this.datosUsuario[0].id_usuario.toString());
          console.log(this.cookie.get('rol'))
        });        
        existeComprobar = true;        
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
    this.cookie.set('rol', '');
    window.open('/home', '_self');

  }
}
