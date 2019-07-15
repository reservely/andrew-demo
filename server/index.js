const app = require('./app');

const port = 3005;

module.exports = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});