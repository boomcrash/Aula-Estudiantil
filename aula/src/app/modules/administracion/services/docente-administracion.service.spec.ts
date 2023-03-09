import { TestBed } from '@angular/core/testing';

import { DocenteAdministracionService } from './docente-administracion.service';

describe('DocenteAdministracionService', () => {
  let service: DocenteAdministracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocenteAdministracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
