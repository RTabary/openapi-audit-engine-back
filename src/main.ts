import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import * as helmet from 'helmet';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import * as bodyParser from 'body-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    //methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //allowedHeaders: 'Content-Type',
    preflightContinue: false,
    //optionsSuccessStatus: 200,
    maxAge: -1
  });
  app.use(bodyParser.text({ type: 'text/yaml' }));
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.use(helmet());
  
  await app.listen(3000);
}
bootstrap();
