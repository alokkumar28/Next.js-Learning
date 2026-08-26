import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        name:"alok",
        id:7
    })
}

export async function POST(request:NextRequest){
    let {name , age} = await request.json();
    return NextResponse.json({
        name:name,
        age:age
    })

}