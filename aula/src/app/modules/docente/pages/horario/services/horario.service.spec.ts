import { TestBed } from '@angular/core/testing';

import { horarioServiceDocente } from './horario.service';

describe('evaluacionService', () => {
  let service: horarioServiceDocente;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(horarioServiceDocente);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
