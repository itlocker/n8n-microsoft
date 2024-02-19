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
		description: 'Get information using the Microsoft Graph API',
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
			baseURL: 'https://graph.microsoft.com/v1.0/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
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
						name: 'User',
						value: 'user',
					},
				],
				default: 'user',
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
						resource: ['user'],
					},
				},
				options: [
					{
						name: 'Get All Users',
						value: 'get_all_users',
						action: 'Get all users',
						// description: 'Get all users',
						routing: {
							request: {
								method: 'GET',
								url: 'users',
							},
						},
					},
				],
				default: 'get_all_users',
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
						resource: ['user'],
						operation: ['get_all_users'],
					},
				},
				default: '',
			},
		],
	};
}
