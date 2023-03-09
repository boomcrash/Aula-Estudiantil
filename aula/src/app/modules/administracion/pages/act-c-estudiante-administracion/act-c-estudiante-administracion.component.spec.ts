import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActCEstudianteAdministracionComponent } from './act-c-estudiante-administracion.component';

describe('ActCEstudianteAdministracionComponent', () => {
  let component: ActCEstudianteAdministracionComponent;
  let fixture: ComponentFixture<ActCEstudianteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActCEstudianteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActCEstudianteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
