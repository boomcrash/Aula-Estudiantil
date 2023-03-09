import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoDocenteAdministracionComponent } from './contrato-docente-administracion.component';

describe('ContratoDocenteAdministracionComponent', () => {
  let component: ContratoDocenteAdministracionComponent;
  let fixture: ComponentFixture<ContratoDocenteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoDocenteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratoDocenteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
