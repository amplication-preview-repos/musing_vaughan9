import * as graphql from "@nestjs/graphql";
import { LearningDashboardService } from "./learningdashboard.service";

export class LearningDashboardResolver {
  constructor(protected readonly service: LearningDashboardService) {}

  @graphql.Query(() => Number)
  async GetTotalReadingTimeForLearningPath(
    @graphql.Args("args")
    args: string
  ): Promise<number> {
    return this.service.GetTotalReadingTimeForLearningPath(args);
  }
}
