
import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.nextUrl;
  const { pathname } = url;

  if (pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const fetchUrl = url.origin + "/api/hello"
  console.log('fetchUrl: ', fetchUrl);
  const fetchResult = await fetch(fetchUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("result: ", typeof fetchResult, Object.keys(fetchResult), fetchResult);
  const payload = fetchResult.json();
  console.log("payload: ", payload, Object.keys(payload));

  return NextResponse.next();
}

