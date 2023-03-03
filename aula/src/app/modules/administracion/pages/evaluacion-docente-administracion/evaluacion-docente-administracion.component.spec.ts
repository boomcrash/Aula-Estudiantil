import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDocenteAdministracionComponent } from './evaluacion-docente-administracion.component';

describe('EvaluacionDocenteAdministracionComponent', () => {
  let component: EvaluacionDocenteAdministracionComponent;
  let fixture: ComponentFixture<EvaluacionDocenteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionDocenteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionDocenteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
