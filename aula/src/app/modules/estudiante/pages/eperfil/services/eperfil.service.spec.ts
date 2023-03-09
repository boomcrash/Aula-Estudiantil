import { TestBed } from '@angular/core/testing';

import { EPerfilService } from './eperfil.service';

describe('ActaService', () => {
  let service: EPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
