import {NextApiRequest, NextApiResponse} from 'next';
import {nanoid} from 'nanoid';

import client from '../../middlewares/db';

type Data = {
	message: string;
	id?: string;
};

const createReport = async (request: NextApiRequest, response: NextApiResponse<Data>): Promise<void> => {
	if (request.method === 'POST') {
		try {
			await client.connect();

			const db = client.db(process.env.DB_NAME);
			const _id = nanoid(10);

			await db.collection(process.env.DB_COLLECTION ?? '').insertOne({_id, report: request.body});

			response.status(201).json({message: 'OK', id: _id});
		} catch {
			response.status(500).json({message: 'Failed creating a new report. Please check the database status.'});
		}
	}
};

export default createReport;
