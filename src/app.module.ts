import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosController } from './alumnos/alumnos.controller';
import { AlumnosService } from './alumnos/alumnos.service';
import { AlumnosInscriptosController } from './alumnos-inscriptos/alumnos-inscriptos.controller';
import { CursosController } from './cursos/cursos.controller';
import { CursosService } from './cursos/cursos.service';
import { AlumnoModule } from './alumno/alumno.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { ProductoService } from './producto/producto.service';
import { LoginModule } from './login/login.module';

  


@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..',
    'client'),
    }),
    AlumnoModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "admin",
      "database": "cflapp",
      "entities": ["dist/**/**.entity{.ts,.js}"],
      "synchronize": true
    }),
    LoginModule
    ],
  controllers: [AppController, AlumnosController, AlumnosInscriptosController, CursosController ],
  providers: [AppService, AlumnosService, CursosService ],
})
export class AppModule {}
