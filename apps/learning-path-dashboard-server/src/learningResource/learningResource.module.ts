import { Module } from "@nestjs/common";
import { LearningResourceModuleBase } from "./base/learningResource.module.base";
import { LearningResourceService } from "./learningResource.service";
import { LearningResourceController } from "./learningResource.controller";
import { LearningResourceResolver } from "./learningResource.resolver";

@Module({
  imports: [LearningResourceModuleBase],
  controllers: [LearningResourceController],
  providers: [LearningResourceService, LearningResourceResolver],
  exports: [LearningResourceService],
})
export class LearningResourceModule {}
