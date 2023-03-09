import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CursoModel } from '../../../models/cursoModel';

@Component({
  selector: 'app-generando-modal',
  templateUrl: './generando-modal.component.html',
  styleUrls: ['./generando-modal.component.css']
})
export class GenerandoModalComponent implements OnInit{
  @Input() public curso!: CursoModel;
  isLoading: boolean = false; 
  modalRef: any; 
  redirectTimeout: any; 
  cargando = true;

  constructor(public activeModal: NgbActiveModal,private router:Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 5000);
    const modalOptions: NgbModalOptions = {
      backdrop: 'static'
    };

  }

  close(){
    this.activeModal.close()
    // window.open('/estudiante/horario', '_self');    
  }


}

