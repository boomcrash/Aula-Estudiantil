import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteAdministracionComponent } from './estudiante-administracion.component';

describe('EstudianteAdministracionComponent', () => {
  let component: EstudianteAdministracionComponent;
  let fixture: ComponentFixture<EstudianteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudianteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
