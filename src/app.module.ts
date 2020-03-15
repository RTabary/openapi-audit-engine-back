import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import { ApiDefinitionAuditModule } from './api-definition-audit/api-definition-audit.module';
import * as winston from 'winston';
import * as dailyRotateFile from 'winston-daily-rotate-file';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        new dailyRotateFile({
          filename: 'logs/apim-rest-api-combined-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
          level: 'info',
          format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss:SSS'
            }),
            winston.format.json()
        )
      }),
      new dailyRotateFile({
          filename: 'logs/api-errors-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
          level: 'error',
          format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss:SSS'
            }),
            winston.format.json()
        )
      })
      ],
      // other options
    }),
    ApiDefinitionAuditModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
