import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosController } from './alumnos/alumnos.controller';
import { AlumnosService } from './alumnos/alumnos.service';

  


@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..',
    'client'),
    }),
    ],
  controllers: [AppController, AlumnosController ],
  providers: [AppService, AlumnosService ],
})
export class AppModule {}
