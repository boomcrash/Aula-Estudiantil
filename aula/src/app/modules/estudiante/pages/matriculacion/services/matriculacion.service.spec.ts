import { TestBed } from '@angular/core/testing';

import { matriculacionService } from './matriculacion.service';

describe('matriculacionService', () => {
  let service: matriculacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(matriculacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
