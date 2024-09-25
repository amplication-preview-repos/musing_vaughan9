import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LearningPathServiceBase } from "./base/learningPath.service.base";

@Injectable()
export class LearningPathService extends LearningPathServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
