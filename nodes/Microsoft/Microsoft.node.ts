import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Microsoft implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Microsoft',
		name: 'microsoft',
		icon: 'file:microsoft.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get and Set information in Microsoft',
		defaults: {
			name: 'Microsoft',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'microsoftOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: `={{"https://..." + $credentials["accountId"]}}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			qs: {
				limit: 0,
			},
		},
		//
		properties: [
			/**
			 * Resources
			 */
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'First Resource',
						value: 'firstResource',
					},
				],
				default: 'firstResource',
			},

			/**
			 * Resource Operations
			 */
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['firstResource'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get first resource',
						description: 'Get First Resource',
						routing: {
							request: {
								method: 'GET',
								url: '=/.../{{$parameter.projectId}}',
								body: {
									archived: true,
								},
							},
						},
					},
				],
				default: 'get',
			},

			/**
			 * Additional fields for Resource Operations
			 */
			{
				displayName: 'Tenant ID',
				name: 'tenantId',
				type: 'string',
				required: true,
				placeholder: 'Tenant ID',
				displayOptions: {
					show: {
						resource: ['firstResource'],
						operation: ['get'],
					},
				},
				default: '',
			},
		],
	};
}
