import { NextApiRequest, NextApiResponse } from 'next';

const myPage = (req: NextApiRequest, res: NextApiResponse): void => {
  const {
    query: { page },
  } = req;

  if (typeof page === 'string') {
    console.log(`page Number:${page}`);

    const returnTodos = [];
    const nums = parseInt(page) * 5;
    for (let i = nums; i < nums + 5; i += 1) {
      const returnTodo = {
        id: i,
        message: `Todo number: ${i}`,
      };
      returnTodos.push(returnTodo);
    }
    res.status(200).json({ todos: returnTodos, hasMore: page !== '4' });
  } else {
    res.status(500).json(new Error('id is not of correct type'));
  }
};

export default myPage;
