import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarActividadModalComponent } from './modificar-actividad-modal.component';

describe('ModificarActividadModalComponent', () => {
  let component: ModificarActividadModalComponent;
  let fixture: ComponentFixture<ModificarActividadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarActividadModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarActividadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
