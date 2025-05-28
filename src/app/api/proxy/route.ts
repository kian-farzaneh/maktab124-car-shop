import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const urlParam = req.nextUrl.searchParams.get("url");
    if (!urlParam) {
      return new NextResponse("Missing url parameter", { status: 400 });
    }

    const baseURL = "http://api.alikooshesh.ir:3000";
    const targetURL = baseURL + urlParam;

    const headers = new Headers();
    headers.set("api_key", process.env.NEXT_PUBLIC_API_KEY || "");
    
    const incomingAuth = req.headers.get("authorization");
    if (incomingAuth) {
      headers.set("authorization", incomingAuth);
    }

    const response = await fetch(targetURL, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    return new NextResponse("Proxy error", { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const urlParam = req.nextUrl.searchParams.get("url");
    if (!urlParam) {
      return new NextResponse("Missing url parameter", { status: 400 });
    }

    const baseURL = "http://api.alikooshesh.ir:3000";
    const targetURL = baseURL + urlParam;

    const body = await req.json();

    const headers = new Headers();
    headers.set("api_key", process.env.NEXT_PUBLIC_API_KEY || "");
    headers.set("Content-Type", "application/json");

    const incomingAuth = req.headers.get("authorization");
    if (incomingAuth) {
      headers.set("authorization", incomingAuth);
    }

    const response = await fetch(targetURL, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    return new NextResponse("Proxy error", { status: 500 });
  }
}

