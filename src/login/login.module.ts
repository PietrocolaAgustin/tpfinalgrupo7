import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/user.entity';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario
    ])
    ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
