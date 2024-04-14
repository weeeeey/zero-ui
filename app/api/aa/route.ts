import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const url = new URL('/aa', 'http://localhost:3000/');
        return NextResponse.redirect(url);
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { aa } = body;

        return NextResponse.redirect(new URL('/api/bb'), {
            status: 303,
        });
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 });
    }
}
