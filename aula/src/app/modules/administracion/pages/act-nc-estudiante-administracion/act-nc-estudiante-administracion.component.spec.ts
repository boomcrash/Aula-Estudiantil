import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActNcEstudianteAdministracionComponent } from './act-nc-estudiante-administracion.component';

describe('ActNcEstudianteAdministracionComponent', () => {
  let component: ActNcEstudianteAdministracionComponent;
  let fixture: ComponentFixture<ActNcEstudianteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActNcEstudianteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActNcEstudianteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
