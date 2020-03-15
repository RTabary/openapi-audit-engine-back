import { Test, TestingModule } from '@nestjs/testing';
import { ApiDefinitionAuditService } from './api-definition-audit.service';

describe('SwaggerLintService', () => {
  let service: ApiDefinitionAuditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiDefinitionAuditService],
    }).compile();

    service = module.get<ApiDefinitionAuditService>(ApiDefinitionAuditService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
