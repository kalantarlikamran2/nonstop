import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Oak Fiberglass', 'Mahogany', 'Smooth', 'Steel', 'Hardware/Locks','Jamb' ];
  res.send(categories);
});

export default handler;