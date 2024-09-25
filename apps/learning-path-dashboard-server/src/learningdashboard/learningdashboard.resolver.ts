import * as graphql from "@nestjs/graphql";
import { LearningDashboardService } from "./learningdashboard.service";

export class LearningDashboardResolver {
  constructor(protected readonly service: LearningDashboardService) {}
}
