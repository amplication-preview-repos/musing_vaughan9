import * as graphql from "@nestjs/graphql";
import { LearningResourceResolverBase } from "./base/learningResource.resolver.base";
import { LearningResource } from "./base/LearningResource";
import { LearningResourceService } from "./learningResource.service";

@graphql.Resolver(() => LearningResource)
export class LearningResourceResolver extends LearningResourceResolverBase {
  constructor(protected readonly service: LearningResourceService) {
    super(service);
  }
}
