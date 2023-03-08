import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocentesService } from 'src/app/modules/docente/services/docentes.service';
import { DocenteModel } from '../../models/docenteModel';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent {
  @Input() public usuario!: string;
  @Input() public contrasena!: string;
  submitted = false;
  docenteForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router,  private _usuariosService: UsuariosService) { }


  ngOnInit(): void {
    console.log(this.usuario, this.contrasena)

    this.docenteForm = this._formBuilder.group({
      nombres_docente: ['', Validators.required],
      apellidos_docente: ['', Validators.required],
      cedula_docente: ['', [Validators.required, Validators.pattern("^[0-9]{1,10}$")]],
      fechaNacimiento_docente: ['', [Validators.required, Validators.pattern("^\\d{4}-\\d{2}-\\d{2}$"), (control: AbstractControl) => {
        return fechaValida(control.value) ? null : { fechaInvalida: true };
      }]],
      edad_docente: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      direccion_docente: ['', Validators.required],
      telefono_docente: ['', [Validators.required, Validators.pattern("^[0-9]{1,10}$")]],
      email_docente: ['', [Validators.required, Validators.email]],
      titulo_docente: ['', Validators.required],
      nivelEducacion_docente: ['', Validators.required],
      promedio_docente: ['', [Validators.required, Validators.pattern("^[0-9]+(.[0-9]{1,2})?$")]]
    });
  }

  
  registrarDocente(form: FormGroup) {
    this.submitted = true;
    if (this.docenteForm.invalid) {
      return;
    }
    
    const docente: DocenteModel = {
      nombre_usuario: this.usuario,
      contrasena_usuario: this.contrasena,
      rol_usuario: 2, // rol de docente
      nombres_docente: form.value.nombres_docente,
      apellidos_docente: form.value.apellidos_docente,
      cedula_docente: form.value.cedula_docente,
      fechaNacimiento_docente: form.value.fechaNacimiento_docente,
      edad_docente: form.value.edad_docente,
      direccion_docente: form.value.direccion_docente,
      telefono_docente: form.value.telefono_docente,
      email_docente: form.value.email_docente,
      titulo_docente: form.value.titulo_docente,
      nivelEducacion_docente: form.value.nivelEducacion_docente,
      promedio_docente: 0,
    };

    this._usuariosService.agregarDocente(docente).subscribe(data => {
      console.log(data)
      this.router.navigate(['/home']);
    });
  }
}

function fechaValida(fechaString: string): boolean {
  const fecha = new Date(fechaString);
  return fecha instanceof Date && !isNaN(fecha.getTime());
}
