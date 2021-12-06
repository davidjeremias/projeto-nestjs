import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      //load: [configuration] 
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.MSSQL_HOST,
      port: parseInt(<string>process.env.MSSQL_PORT),
      username: process.env.MSSQL_USER,
      password: process.env.MSSQL_PASSWORD,
      database: process.env.MSSQL_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
      migrationsRun: true,
      options: { 
        encrypt: false
      },
      migrations: ['dist/src/db/migration/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/db/migration'
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
