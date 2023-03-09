import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosDocenteAdministracionComponent } from './pagos-docente-administracion.component';

describe('PagosDocenteAdministracionComponent', () => {
  let component: PagosDocenteAdministracionComponent;
  let fixture: ComponentFixture<PagosDocenteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosDocenteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagosDocenteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
