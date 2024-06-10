export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const requestHeaders = new Headers(request.headers);

  return Response.json(
    { text: 'This is a subnode from the api', url: request.url },
    { headers: requestHeaders, status: 200 }
  );
}
