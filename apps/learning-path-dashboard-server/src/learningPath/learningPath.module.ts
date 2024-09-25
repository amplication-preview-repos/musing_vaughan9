import { Module } from "@nestjs/common";
import { LearningPathModuleBase } from "./base/learningPath.module.base";
import { LearningPathService } from "./learningPath.service";
import { LearningPathController } from "./learningPath.controller";
import { LearningPathResolver } from "./learningPath.resolver";

@Module({
  imports: [LearningPathModuleBase],
  controllers: [LearningPathController],
  providers: [LearningPathService, LearningPathResolver],
  exports: [LearningPathService],
})
export class LearningPathModule {}
