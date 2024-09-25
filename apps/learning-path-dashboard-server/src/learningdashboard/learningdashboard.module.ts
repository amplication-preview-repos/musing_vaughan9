import { Module } from "@nestjs/common";
import { LearningDashboardService } from "./learningdashboard.service";
import { LearningDashboardController } from "./learningdashboard.controller";
import { LearningDashboardResolver } from "./learningdashboard.resolver";

@Module({
  controllers: [LearningDashboardController],
  providers: [LearningDashboardService, LearningDashboardResolver],
  exports: [LearningDashboardService],
})
export class LearningDashboardModule {}
