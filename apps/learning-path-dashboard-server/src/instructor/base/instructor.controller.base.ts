/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { InstructorService } from "../instructor.service";
import { InstructorCreateInput } from "./InstructorCreateInput";
import { Instructor } from "./Instructor";
import { InstructorFindManyArgs } from "./InstructorFindManyArgs";
import { InstructorWhereUniqueInput } from "./InstructorWhereUniqueInput";
import { InstructorUpdateInput } from "./InstructorUpdateInput";
import { LearningPathFindManyArgs } from "../../learningPath/base/LearningPathFindManyArgs";
import { LearningPath } from "../../learningPath/base/LearningPath";
import { LearningPathWhereUniqueInput } from "../../learningPath/base/LearningPathWhereUniqueInput";

export class InstructorControllerBase {
  constructor(protected readonly service: InstructorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Instructor })
  async createInstructor(
    @common.Body() data: InstructorCreateInput
  ): Promise<Instructor> {
    return await this.service.createInstructor({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Instructor] })
  @ApiNestedQuery(InstructorFindManyArgs)
  async instructors(@common.Req() request: Request): Promise<Instructor[]> {
    const args = plainToClass(InstructorFindManyArgs, request.query);
    return this.service.instructors({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Instructor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async instructor(
    @common.Param() params: InstructorWhereUniqueInput
  ): Promise<Instructor | null> {
    const result = await this.service.instructor({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Instructor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInstructor(
    @common.Param() params: InstructorWhereUniqueInput,
    @common.Body() data: InstructorUpdateInput
  ): Promise<Instructor | null> {
    try {
      return await this.service.updateInstructor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Instructor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInstructor(
    @common.Param() params: InstructorWhereUniqueInput
  ): Promise<Instructor | null> {
    try {
      return await this.service.deleteInstructor({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/learningPaths")
  @ApiNestedQuery(LearningPathFindManyArgs)
  async findLearningPaths(
    @common.Req() request: Request,
    @common.Param() params: InstructorWhereUniqueInput
  ): Promise<LearningPath[]> {
    const query = plainToClass(LearningPathFindManyArgs, request.query);
    const results = await this.service.findLearningPaths(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        instructor: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/learningPaths")
  async connectLearningPaths(
    @common.Param() params: InstructorWhereUniqueInput,
    @common.Body() body: LearningPathWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      learningPaths: {
        connect: body,
      },
    };
    await this.service.updateInstructor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/learningPaths")
  async updateLearningPaths(
    @common.Param() params: InstructorWhereUniqueInput,
    @common.Body() body: LearningPathWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      learningPaths: {
        set: body,
      },
    };
    await this.service.updateInstructor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/learningPaths")
  async disconnectLearningPaths(
    @common.Param() params: InstructorWhereUniqueInput,
    @common.Body() body: LearningPathWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      learningPaths: {
        disconnect: body,
      },
    };
    await this.service.updateInstructor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
