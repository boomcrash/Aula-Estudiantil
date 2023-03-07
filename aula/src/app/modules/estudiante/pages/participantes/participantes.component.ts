import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Participantes } from '../../models/participantes.model';
import { ParticipantesService } from './servicios/services/participantes.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {
  displayedColumns = ['no', 'nombres', 'email', 'rol'];
  listaParticipantes: Participantes[] = [];

  constructor(private participantes: ParticipantesService) { }
  selected = '0';


  ngOnInit() {
    this.participantes.ObtenerParticipantes(1).subscribe((data) => {
      console.log(data);
      this.listaParticipantes = data.data;
      console.log(this.listaParticipantes);

    }

    

    )
    
  }
  
}
