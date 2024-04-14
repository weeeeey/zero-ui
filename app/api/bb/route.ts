import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        console.log('first');
        return NextResponse.json({
            bbb: 20,
        });
    } catch (error) {
        throw new NextResponse('Internal Error', { status: 500 });
    }
}
