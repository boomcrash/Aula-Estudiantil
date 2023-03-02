import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteAdministracionComponent } from './docente-administracion.component';

describe('DocenteAdministracionComponent', () => {
  let component: DocenteAdministracionComponent;
  let fixture: ComponentFixture<DocenteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
