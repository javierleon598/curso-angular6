import { TestBed } from '@angular/core/testing';

import { UsuarioLogueadoGuard } from './usuario-logeado.guard';

describe('UsuarioLogeadoGuard', () => {
  let guard: UsuarioLogueadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioLogueadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
