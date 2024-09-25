import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LearningResourceService } from "./learningResource.service";
import { LearningResourceControllerBase } from "./base/learningResource.controller.base";

@swagger.ApiTags("learningResources")
@common.Controller("learningResources")
export class LearningResourceController extends LearningResourceControllerBase {
  constructor(protected readonly service: LearningResourceService) {
    super(service);
  }
}
