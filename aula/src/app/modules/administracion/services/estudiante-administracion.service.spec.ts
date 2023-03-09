import { TestBed } from '@angular/core/testing';

import { EstudianteAdministracionService } from './estudiante-administracion.service';

describe('EstudianteAdministracionService', () => {
  let service: EstudianteAdministracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudianteAdministracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
