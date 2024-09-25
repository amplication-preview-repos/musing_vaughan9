import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LearnerServiceBase } from "./base/learner.service.base";

@Injectable()
export class LearnerService extends LearnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
