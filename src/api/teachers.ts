// src/pages/api/teachers.ts
import prisma from "@/lib/prisma";
import { ITEMS_PER_PAGE } from "@/lib/settings";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page } = req.query;
  const p = page ? parseInt(Array.isArray(page) ? page[0] : page) : 1;

  const [data, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      include: {
        subjects: true,
        classes: true,
      },
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (p - 1),
    }),
    prisma.teacher.count(),
  ]);

  res.status(200).json({ data, count });
}
