import type { ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class MicrosoftOAuth2Api implements ICredentialType {
    name: string;
    displayName: string;
    extends: string[];
    documentationUrl: string;
    variable: string;
    properties: INodeProperties[];
}
