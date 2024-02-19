"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftOAuth2Api = void 0;
class MicrosoftOAuth2Api {
    constructor() {
        this.name = 'microsoftOAuth2Api';
        this.displayName = 'Microsoft OAuth2 API';
        this.extends = ['oAuth2Api'];
        this.documentationUrl = 'https://github.com/itlocker/n8n-microsoft/blob/master/README.md';
        this.properties = [
            {
                displayName: 'Grant Type',
                name: 'grantType',
                type: 'hidden',
                default: 'authorizationCode',
            },
            {
                displayName: 'Client ID',
                name: 'clientId',
                type: 'string',
                default: '',
                required: true,
            },
            {
                displayName: 'Client Secret',
                name: 'clientSecret',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                required: true,
            },
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'hidden',
                default: `={{"https://login.microsoftonline.com/" + !!$parameter.tenantId.length ? $parameter.tenantId : "common" + "/oauth2/v2.0/authorize"}}`,
                required: true,
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'hidden',
                default: `={{"https://login.microsoftonline.com/" + !!$parameter.tenantId.length ? $parameter.tenantId : "common" + "/oauth2/v2.0/token"}}`,
                required: true,
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Auth URI Query Parameters',
                name: 'authQueryParameters',
                type: 'hidden',
                displayOptions: {
                    show: {
                        grantType: ['authorizationCode', 'pkce'],
                    },
                },
                default: '',
                description: 'For some services additional query parameters have to be set which can be defined here',
                placeholder: 'access_type=offline',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'hidden',
                default: 'header',
            },
            {
                displayName: 'Ignore SSL Issues',
                name: 'ignoreSSLIssues',
                type: 'boolean',
                default: true,
            },
        ];
    }
}
exports.MicrosoftOAuth2Api = MicrosoftOAuth2Api;
//# sourceMappingURL=MicrosoftOAuth2Api.credentials.js.map