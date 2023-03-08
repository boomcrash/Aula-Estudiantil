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
  searchTerm: string = '';
  filteredParticipantes = this.listaParticipantes;



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
  filterParticipantes() {
    this.filteredParticipantes = this.listaParticipantes.filter((participante) =>
      participante.nombrescompletos_participante.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
  
  
}
