import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EperfilComponent } from './eperfil.component';

describe('EperfilComponent', () => {
  let component: EperfilComponent;
  let fixture: ComponentFixture<EperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
