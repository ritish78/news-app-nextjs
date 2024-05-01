import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
    console.log(request);

    return new Response("Hello Bruh!");
}