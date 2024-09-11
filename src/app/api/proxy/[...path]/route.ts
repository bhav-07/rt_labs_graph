import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const targetUrl = new URL(request.url);
  const path = targetUrl.pathname.replace('/api/proxy', '');
  
  const response = await fetch(`http://10.53.103.123:8000${path}`, {
    headers: {
      'Accept': 'application/json',
      'Cache-Control': 'no-store',
    },
  });

  const data = await response.json();
  return NextResponse.json(data);
}