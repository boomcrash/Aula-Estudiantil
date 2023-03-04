import { TestBed } from '@angular/core/testing';

import { horarioService } from './horario.service';

describe('evaluacionService', () => {
  let service: horarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(horarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
