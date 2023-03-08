/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DperfilComponent } from './dperfil.component';

describe('DperfilComponent', () => {
  let component: DperfilComponent;
  let fixture: ComponentFixture<DperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
