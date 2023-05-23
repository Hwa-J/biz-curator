import { NextApiRequest, NextApiResponse } from 'next';

const myFunction = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ id: 1, message: 'I am Todo' });
};

export default myFunction;
