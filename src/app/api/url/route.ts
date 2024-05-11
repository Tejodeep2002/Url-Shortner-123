import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const shortId = nanoid(8);

  try {
    const client = await prisma.url.upsert({
      where: { redirectUrl: body.url },
      create: {
        shortId,
        redirectUrl: body.url,
      },
      update: {},
    });

    return NextResponse.json(client);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};
