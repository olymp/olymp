import render from 'olymp-render/string';

export default ({ ssr = true } = {}) => async (req, res) => {
  const { status, result } = await render(req.originalUrl, { ...req, ssr });

  switch (status) {
    case 'ERROR':
      res.status(500).send(result);
      break;
    case 'REDIRECT':
      res.status(301).setHeader('Location', result);
      res.end();
      break;
    case 'MISS':
      res.status(404).send(result);
      break;
    default:
      res.status(200).send(result);
  }
};
