import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginService } from 'src/app/core/services/login.service';
import { ItemMatricula } from './models/itemmatricula.model';
import { EPerfilService } from './pages/eperfil/services/eperfil.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  id = this.cookie.get('id');
  validarMatricula: boolean = true;
  matricula: ItemMatricula[] = [];
  constructor(
    private loginService: LoginService,
    private ePerfil: EPerfilService,
    private autentificar: AuthService,
    private cookie: CookieService
    ){

  }

 ngOnInit(): void {
  let id_estudiante: number = 0;
  this.autentificar.obtenerDatosCompletos(this.id).toPromise().then( resp =>{
    id_estudiante = resp.data[0].id_estudiante;    
    this.ePerfil.obtenerItemMatricula(id_estudiante).toPromise().then( data =>{
      this.matricula = data.data;
      console.log(this.matricula)
      if(this.matricula.length>0){
        console.log(this.matricula[0].ciclo_matricula)
        if(this.matricula[0].ciclo_matricula == '2023-2024 CI' || this.matricula[0].ciclo_matricula == '2022-2023 CII'){
          this.validarMatricula = false;
        }        
      }else{
        
      }
      
      }).catch(err =>{
        console.error(err);
      });
    }).catch(err =>{
      console.error(err);
    });
    console.log(this.validarMatricula)
  }
}
