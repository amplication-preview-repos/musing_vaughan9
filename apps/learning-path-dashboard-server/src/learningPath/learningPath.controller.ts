import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LearningPathService } from "./learningPath.service";
import { LearningPathControllerBase } from "./base/learningPath.controller.base";

@swagger.ApiTags("learningPaths")
@common.Controller("learningPaths")
export class LearningPathController extends LearningPathControllerBase {
  constructor(protected readonly service: LearningPathService) {
    super(service);
  }
}
