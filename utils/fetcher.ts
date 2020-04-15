'use strict';

import {GraphQLClient} from 'graphql-request';

const endpoint = 'https://api.github.com/graphql';
const query = `{
	repositoryOwner(login: "xxczaki") {
		repositories(orderBy: {direction: DESC, field: STARGAZERS}, first: 6) {
			nodes {
				name
				stargazers {
					totalCount
				}
		  	}
		}
	}
}`;

const client = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.GITHUB_TOKEN ?? '5bd733f51e1a30516f92af57ec7c5aa392b44511'}`
	}
});

export interface Response {
	repositoryOwner: {
		repositories: {
			nodes: [
				{
					name: string;
					stargazers: {
						totalCount: number;
					};
				}
			];
		};
	};
}

export const fetcher = async (): Promise<Response> => {
	const data: Response = await client.request(query);

	return data;
};
