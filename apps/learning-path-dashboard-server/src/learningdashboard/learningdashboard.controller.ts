import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LearningDashboardService } from "./learningdashboard.service";

@swagger.ApiTags("learningDashboards")
@common.Controller("learningDashboards")
export class LearningDashboardController {
  constructor(protected readonly service: LearningDashboardService) {}

  @common.Get("/learningPath/:learningPathId/totalReadingTime")
  @swagger.ApiOkResponse({
    type: Number
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTotalReadingTimeForLearningPath(
    @common.Body()
    body: string
  ): Promise<number> {
        return this.service.GetTotalReadingTimeForLearningPath(body);
      }
}
