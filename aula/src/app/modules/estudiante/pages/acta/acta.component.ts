import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActaCalificacion } from '../../models/actacalificacion.model';
import { ActaService } from './services/acta.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/core/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-acta',
  templateUrl: './acta.component.html',
  styleUrls: ['./acta.component.css']
})
export class ActaComponent implements OnInit {

  constructor( 
    private snackbar: MatSnackBar, 
    private loginService: LoginService,
    private actaservice: ActaService,
    private cookie: CookieService
    ) {
    }

  dataSource!: ActaCalificacion[];
  id = parseInt(this.cookie.get('id'));
 
  displayedColumns = ['materia', 'modulo', 'paralelo', 'pcalificaciones', 'pasistencias', 'estado'];

  ngOnInit() {
    this.actaservice.obtenerEstudianteItemActa(this.id).subscribe(data=>{
      this.dataSource=data.data;
      console.log(this.dataSource)
    });
  }
}