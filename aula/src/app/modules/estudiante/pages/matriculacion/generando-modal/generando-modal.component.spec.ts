import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerandoModalComponent } from './generando-modal.component';

describe('GenerandoModalComponent', () => {
  let component: GenerandoModalComponent;
  let fixture: ComponentFixture<GenerandoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerandoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerandoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
