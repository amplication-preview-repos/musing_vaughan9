import * as graphql from "@nestjs/graphql";
import { LearningPathResolverBase } from "./base/learningPath.resolver.base";
import { LearningPath } from "./base/LearningPath";
import { LearningPathService } from "./learningPath.service";

@graphql.Resolver(() => LearningPath)
export class LearningPathResolver extends LearningPathResolverBase {
  constructor(protected readonly service: LearningPathService) {
    super(service);
  }
}
