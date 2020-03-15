import { Injectable, UnsupportedMediaTypeException } from '@nestjs/common';
import { IApiDefinitionAuditCriteria } from './interfaces/api-definition-audit.interface';
const { Spectral, Document, Parsers, isOpenApiv2, isOpenApiv3 } = require('@stoplight/spectral');
const { join } = require('path');
import * as fs from 'fs';

@Injectable()
export class ApiDefinitionAuditService {
    private spectral: any;

    constructor() {
        this.spectral = new Spectral();
        this.spectral.registerFormat('oas2', isOpenApiv2);
        this.spectral.registerFormat('oas3', isOpenApiv3);
        let filePath = join(__dirname, '../assets/.spectral.yml');
        if (!fs.existsSync(filePath)) filePath = 'spectral:oas';
        this.spectral.loadRuleset(filePath).then();
    }
    
    async auditApiDefinition(contentType: string, requestBody: string | object): Promise<IApiDefinitionAuditCriteria[]> {
        let swaggerDefinition: object | string;
        if (contentType === 'text/yaml') {
            swaggerDefinition = new Document(requestBody, Parsers.Yaml);
        } else if (contentType === 'application/json') {
            swaggerDefinition = requestBody;
        } else {
            throw new UnsupportedMediaTypeException();
        }
        return this.spectral.run(swaggerDefinition);
    }
}
