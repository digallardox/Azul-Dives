import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json()
  const { token } = body
        cookies().set({
            name: 'jwt',
            value: token,
            httpOnly: true,
            path: '/',
            maxAge: 3600,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
          });
        
          return NextResponse.json({ success: true });
}
