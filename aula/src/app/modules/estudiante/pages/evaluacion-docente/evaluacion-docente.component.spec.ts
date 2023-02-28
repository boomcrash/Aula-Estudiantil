import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDocenteComponent } from './evaluacion-docente.component';

describe('EvaluacionDocenteComponent', () => {
  let component: EvaluacionDocenteComponent;
  let fixture: ComponentFixture<EvaluacionDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
