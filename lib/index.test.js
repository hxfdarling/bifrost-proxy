process.env.NOHOST = 'true';
process.env.PORT = '1234';
require('./index');
const { createServer } = require('http');

describe('test suites', () => {
  it('test module', async (done) => {
    const s = createServer((req, res) => {
      res.write('data');
      res.end();
    });
    s.listen(88);
    s.close(done);
  });
});
