import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LearningResourceServiceBase } from "./base/learningResource.service.base";

@Injectable()
export class LearningResourceService extends LearningResourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
