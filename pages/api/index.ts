// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const requestMethod = req.method;
  const {data} = req.body;
  switch (requestMethod) {
    case 'POST':
      res.status(200).json({ message: `You submitted the following data ${data}` });
      return;
      
    default:
      res.status(200).json({ message: 'Welcome to API Routes!' });
  }
}
