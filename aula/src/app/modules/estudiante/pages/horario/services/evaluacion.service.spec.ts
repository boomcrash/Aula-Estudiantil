import { TestBed } from '@angular/core/testing';

import { evaluacionService } from './evaluacion.service';

describe('evaluacionService', () => {
  let service: evaluacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(evaluacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
