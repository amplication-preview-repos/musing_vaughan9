import { Injectable } from "@nestjs/common";

@Injectable()
export class LearningDashboardService {
  constructor() {}
  async GetTotalReadingTimeForLearningPath(args: string): Promise<number> {
    throw new Error("Not implemented");
  }
}
