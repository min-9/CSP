import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

/**
 * @param {NextRequest} request
 */
export async function GET(request) {
  const state = JSON.parse(
    fs.readFileSync('src/data/state.json', { encoding: 'utf8' })
  );

  fs.writeFileSync(
    'src/data/state.json',
    JSON.stringify({ isCorrect: !state.isCorrect })
  );

  return new NextResponse(JSON.stringify({ state }));
}
