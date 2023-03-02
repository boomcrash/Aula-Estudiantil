import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { DatosUser } from '../../interfaces/datosSimplesUser.interface';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { LoginComponent } from '../autentificacion/login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  active: boolean = this.loginService.getActive();  
  user = this.cookie.get('username');
  rol = this.cookie.get('rol');
  nombre = '';  

  constructor(private dialog: MatDialog,
    private loginService: LoginService,
    private cookie: CookieService,
    private autentificar: AuthService){

  }

  ngOnInit(): void {        
    console.log(this.rol,'ooas')
  }
  
  openDialogSesion(): void {
    this.dialog.open(LoginComponent, { disableClose: true, width: '500px' });
  }

  logout() {
    this.loginService.logout();
  }
  

}

