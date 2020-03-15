export interface IApiDefinitionAuditScoredResponse {
    score: string;
    audit: IApiDefinitionAuditCriteria[]
}

export interface IApiDefinitionAuditCriteria {
    code: string;
    message: string;
    path: string[];
    severity: number;
    range: {
        start: IRange;
        end: IRange;
    };
}
export interface IRange {
    line: number;
    character: number;
}