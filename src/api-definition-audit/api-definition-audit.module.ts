import { Module } from '@nestjs/common';
import { ApiDefinitionAuditController } from './api-definition-audit.controller';
import { ApiDefinitionAuditService } from './api-definition-audit.service';

@Module({
  controllers: [ApiDefinitionAuditController],
  providers: [ApiDefinitionAuditService]
})
export class ApiDefinitionAuditModule {}
