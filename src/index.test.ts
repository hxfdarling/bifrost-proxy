process.env.NOHOST = 'true';
process.env.PORT = '1234';
import './index';
import { createServer } from 'http';
describe('test suites', () => {
  it('test module', async (done: any) => {
    const s = createServer((req, res) => {
      res.write('data');
      res.end();
    });
    s.listen(88);
    s.close(done);
  });
});
