import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CambiarContrasenaComponent } from '../cambiar-contrasena/cambiar-contrasena.component';
import { EperfilComponent } from 'src/app/modules/estudiante/pages/eperfil/eperfil.component';


@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})


export class MiCuentaComponent {

  constructor(private dialog: MatDialog) { }


  cambiar(){
    this.dialog.open(CambiarContrasenaComponent ,{ disableClose: true, width: '500px', height: '500px'});


  }
}
