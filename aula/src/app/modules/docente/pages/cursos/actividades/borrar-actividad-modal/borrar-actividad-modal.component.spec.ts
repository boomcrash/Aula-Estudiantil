import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarActividadModalComponent } from './borrar-actividad-modal.component';

describe('BorrarActividadModalComponent', () => {
  let component: BorrarActividadModalComponent;
  let fixture: ComponentFixture<BorrarActividadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarActividadModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarActividadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
