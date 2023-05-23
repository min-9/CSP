import { NextRequest, NextResponse } from 'next/server';

/**
 * @param {NextRequest} request
 */
export async function GET(request) {
  return new NextResponse(
    JSON.stringify({
      answer: [6857, 171, 31875000, 31626, 4782, 872187],
    })
  );
}

/**
 * @param {NextRequest} request
 */
export async function POST(request) {
  const { answer } = await (await GET(request)).json();

  const bodyJson = await request.json();

  return new NextResponse(
    JSON.stringify({ returnValue: bodyJson.input === answer[bodyJson.id - 1] })
  );
}
