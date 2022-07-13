require('dotenv/config');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const db = require('./db');

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
} else {
  app.use(express.static(publicPath));
}

app.get('/api/entries', (req, res, next) => {
  const userId = 1;

  const sql = `
    select
      "entryId",
      "title",
      "photoUrl",
      "notes"
    from
      "entries"
    where
      "userId" = $1
  `;

  const params = [ userId ];

  db.query(sql, params)
    .then(results => {
      res.json(results.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
