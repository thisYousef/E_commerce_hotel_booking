import { renderToPipeableStream } from 'react-dom/server';
import App from './src/App';
const path = require('path');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.write('<!DOCTYPE html>');
  const { pipe } = renderToPipeableStream(<App />, {
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  });
});
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '30d' // Set cache expiry time to 30 days
}));
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});