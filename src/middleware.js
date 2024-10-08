import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname === '/') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// 이 미들웨어를 적용할 경로 설정
export const config = {
    matcher: ['/'],
};
