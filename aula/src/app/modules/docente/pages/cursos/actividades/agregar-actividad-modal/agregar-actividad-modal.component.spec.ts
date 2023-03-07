import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarActividadModalComponent } from './agregar-actividad-modal.component';

describe('AgregarActividadModalComponent', () => {
  let component: AgregarActividadModalComponent;
  let fixture: ComponentFixture<AgregarActividadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarActividadModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarActividadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
