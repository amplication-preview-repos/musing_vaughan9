import { Module } from "@nestjs/common";
import { ReadingStatisticsModuleBase } from "./base/readingStatistics.module.base";
import { ReadingStatisticsService } from "./readingStatistics.service";
import { ReadingStatisticsController } from "./readingStatistics.controller";
import { ReadingStatisticsResolver } from "./readingStatistics.resolver";

@Module({
  imports: [ReadingStatisticsModuleBase],
  controllers: [ReadingStatisticsController],
  providers: [ReadingStatisticsService, ReadingStatisticsResolver],
  exports: [ReadingStatisticsService],
})
export class ReadingStatisticsModule {}
