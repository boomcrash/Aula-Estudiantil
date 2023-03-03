import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstudianteAdministracionComponent } from './ver-estudiante-administracion.component';

describe('VerEstudianteAdministracionComponent', () => {
  let component: VerEstudianteAdministracionComponent;
  let fixture: ComponentFixture<VerEstudianteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEstudianteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEstudianteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
