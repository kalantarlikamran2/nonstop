import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Single entry ', 'Double ', 'French  ', 'Door with sidelites ', 'Vinyl Sliding  ', 'Aluminum Sliding  ', 'Aluminum Bifold  ' ];
  res.send(categories);
});

export default handler;