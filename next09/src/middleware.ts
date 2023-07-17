import { NextResponse } from "next/server";

export function middleware(request:Request){
    console.log(request.url);
    console.log(request.method;
}