import { Test, TestingModule } from '@nestjs/testing';
import { ApiDefinitionAuditController } from './api-definition-audit.controller';

describe('SwaggerLint Controller', () => {
  let controller: ApiDefinitionAuditController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiDefinitionAuditController],
    }).compile();

    controller = module.get<ApiDefinitionAuditController>(ApiDefinitionAuditController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
