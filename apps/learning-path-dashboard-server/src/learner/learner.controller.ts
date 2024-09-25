import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LearnerService } from "./learner.service";
import { LearnerControllerBase } from "./base/learner.controller.base";

@swagger.ApiTags("learners")
@common.Controller("learners")
export class LearnerController extends LearnerControllerBase {
  constructor(protected readonly service: LearnerService) {
    super(service);
  }
}
