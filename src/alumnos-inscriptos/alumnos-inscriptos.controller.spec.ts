import { Test, TestingModule } from '@nestjs/testing';
import { AlumnosInscriptosController } from './alumnos-inscriptos.controller';

describe('AlumnosInscriptosController', () => {
  let controller: AlumnosInscriptosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlumnosInscriptosController],
    }).compile();

    controller = module.get<AlumnosInscriptosController>(AlumnosInscriptosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
