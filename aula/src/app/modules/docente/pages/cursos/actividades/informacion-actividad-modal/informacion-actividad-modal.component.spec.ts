import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionActividadModalComponent } from './informacion-actividad-modal.component';

describe('InformacionActividadModalComponent', () => {
  let component: InformacionActividadModalComponent;
  let fixture: ComponentFixture<InformacionActividadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionActividadModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionActividadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
