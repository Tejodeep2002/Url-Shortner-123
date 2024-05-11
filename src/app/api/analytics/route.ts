import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const allDetails = await prisma.url.findMany({
      where: {},
      select: {
        id: true,
        shortId: true,
        redirectUrl: true,
        visitHistory: {
          select: {
            createdAt: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    const sortedDetails = allDetails.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return NextResponse.json(sortedDetails);
  } catch (error) {
    return NextResponse.json(error);
  }
};
