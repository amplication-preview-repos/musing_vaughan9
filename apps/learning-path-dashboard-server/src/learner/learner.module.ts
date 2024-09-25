import { Module } from "@nestjs/common";
import { LearnerModuleBase } from "./base/learner.module.base";
import { LearnerService } from "./learner.service";
import { LearnerController } from "./learner.controller";
import { LearnerResolver } from "./learner.resolver";

@Module({
  imports: [LearnerModuleBase],
  controllers: [LearnerController],
  providers: [LearnerService, LearnerResolver],
  exports: [LearnerService],
})
export class LearnerModule {}
