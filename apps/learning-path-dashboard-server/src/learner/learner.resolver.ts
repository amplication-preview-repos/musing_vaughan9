import * as graphql from "@nestjs/graphql";
import { LearnerResolverBase } from "./base/learner.resolver.base";
import { Learner } from "./base/Learner";
import { LearnerService } from "./learner.service";

@graphql.Resolver(() => Learner)
export class LearnerResolver extends LearnerResolverBase {
  constructor(protected readonly service: LearnerService) {
    super(service);
  }
}
