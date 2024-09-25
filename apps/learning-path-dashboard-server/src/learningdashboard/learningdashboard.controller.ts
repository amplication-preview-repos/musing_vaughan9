import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LearningDashboardService } from "./learningdashboard.service";

@swagger.ApiTags("learningDashboards")
@common.Controller("learningDashboards")
export class LearningDashboardController {
  constructor(protected readonly service: LearningDashboardService) {}
}
