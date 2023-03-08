import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { usuarioModel } from '../../models/usuarioPerfil';
import { EstudianteAdministracionService } from '../../services/estudiante-administracion.service';

@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.css']
})
export class AdminPerfilComponent {
  panelOpenState = false;
  id = parseInt(this.cookie.get('id'));
  dataSource!: any;
  dataSoureUsuario!:usuarioModel[];

  constructor(private cookie:CookieService, private datosUser:EstudianteAdministracionService){}

  ngOnInit():void{
    this.datosUser.obtenerUsuario().subscribe((data)=>{
      this.dataSoureUsuario=data.data;
      const usuario_admin=this.dataSoureUsuario.find(
        (usuario)=>usuario.id_usuario===this.id
      )
      if(usuario_admin){
        const usuario:usuarioModel={ 
          id_usuario:usuario_admin.id_usuario,
          nombre_usuario: usuario_admin.nombre_usuario,
          contrasena_usuario: usuario_admin.contrasena_usuario,
          rol_usuario: usuario_admin.rol_usuario,
        }
        this.dataSource=usuario;
        console.log(usuario);
      }
    })
  }
}
