import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDocenteAdministracionComponent } from './ver-docente-administracion.component';

describe('VerDocenteAdministracionComponent', () => {
  let component: VerDocenteAdministracionComponent;
  let fixture: ComponentFixture<VerDocenteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDocenteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDocenteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
