import { redirect } from "next/navigation";

type DataForm = { name: string; age: number; message: string };

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET() {
  redirect("https://www.google.com/");
}

export async function OPTIONS() {
  return Response.json({}, { headers: corsHeaders });
}
export async function POST(request: Request) {
  const data = await request.json();

  if (!isDataForm(data)) {
    return Response.json(
      { error: { code: 404, message: "Wrong data format!" } },
      {
        status: 404,
      }
    );
  }

  return Response.json(
    { test: "Test" },
    {
      headers: corsHeaders,
      status: 200,
    }
  );
}

/**
 * Checks if posted data is from type DataForm
 * @param data
 * @returns
 */
function isDataForm(data: any): data is DataForm {
  return (
    typeof data.name === "string" &&
    typeof data.age === "number" &&
    typeof data.message === "string"
  );
}
