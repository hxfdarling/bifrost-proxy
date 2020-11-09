process.env.BIFROST = 'true';
process.env.PORT = '1234';
process.env.BIFROST_SERVER = 'true';
require('./index');
const { createServer } = require('http');

describe('listen', () => {
  it('replace port', async (done) => {
    const s = createServer((req, res) => {
      res.write('data');
      res.end();
    });
    s.listen(80);
    s.close(done);
  });
});
