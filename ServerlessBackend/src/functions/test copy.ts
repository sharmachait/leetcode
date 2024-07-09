import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';

export async function testcopy(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);
  console.log(process.env.DATABASE_URL);
  const name = request.query.get('name') || (await request.text()) || 'world';

  return { body: `Hello, ${process.env.DATABASE_URL}!` };
}

app.http('testcopy', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: testcopy,
});
