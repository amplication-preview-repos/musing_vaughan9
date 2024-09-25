import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReadingStatisticsServiceBase } from "./base/readingStatistics.service.base";

@Injectable()
export class ReadingStatisticsService extends ReadingStatisticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
