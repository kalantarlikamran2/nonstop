import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['door', 'Pants'];
  res.send(categories);
});

export default handler;