const app = require('./app');

const PORT = 3005;

module.exports = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});