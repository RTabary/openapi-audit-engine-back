import { Controller, Post, Body, HttpStatus, Inject, HttpCode, Req } from '@nestjs/common';
import { Logger } from 'winston';
import { Request } from 'express';
import { IApiDefinitionAuditCriteria } from './interfaces/api-definition-audit.interface';
import { ApiDefinitionAuditService } from './api-definition-audit.service';

@Controller()
export class ApiDefinitionAuditController {

    constructor (
        @Inject('winston') private readonly logger: Logger,
        private readonly apiDefinitionService: ApiDefinitionAuditService
    ) {}

    @Post('audit_api_definition')
    @HttpCode(HttpStatus.OK)
    lintSwaggerResult(@Body() body: any, @Req() request: Request): Promise<IApiDefinitionAuditCriteria[]> {
        return this.apiDefinitionService.auditApiDefinition(request.headers["content-type"], body);
    }
}
