import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
  const pathName = request.nextUrl.pathname.split("/")[1];

  console.log(pathName);

  try {
    const client = await prisma.url.update({
      where: { shortId: pathName },
      data: {
        visitHistory: {
          create: {},
        },
      },
    });
    return NextResponse.redirect(client.redirectUrl);
  } catch {
    return NextResponse.json("page not found");
  }
};
