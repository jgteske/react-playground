// using app rounting instead of page routing
export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const requestHeaders = new Headers(request.headers);

  return Response.json(
    { text: "Hello from this example API", url: request.url },
    { headers: requestHeaders, status: 200 }
  );
}
