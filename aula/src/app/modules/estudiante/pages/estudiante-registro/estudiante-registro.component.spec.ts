/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstudianteRegistroComponent } from './estudiante-registro.component';

describe('EstudianteRegistroComponent', () => {
  let component: EstudianteRegistroComponent;
  let fixture: ComponentFixture<EstudianteRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
