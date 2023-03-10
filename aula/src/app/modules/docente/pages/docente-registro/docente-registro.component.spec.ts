import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteRegistroComponent } from './docente-registro.component';

describe('DocenteRegistroComponent', () => {
  let component: DocenteRegistroComponent;
  let fixture: ComponentFixture<DocenteRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
