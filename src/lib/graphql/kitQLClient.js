import { KitQLClient } from '@kitql/client';

export const kitQLClient = new KitQLClient({
	url: `http://localhost:5000/graphql`,
	headersContentType: 'application/json',
	logType: ['client', 'server', 'operationAndvariables']
});