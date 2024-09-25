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
import { LearningResourceService } from "../learningResource.service";
import { LearningResourceCreateInput } from "./LearningResourceCreateInput";
import { LearningResource } from "./LearningResource";
import { LearningResourceFindManyArgs } from "./LearningResourceFindManyArgs";
import { LearningResourceWhereUniqueInput } from "./LearningResourceWhereUniqueInput";
import { LearningResourceUpdateInput } from "./LearningResourceUpdateInput";
import { ReadingStatisticsFindManyArgs } from "../../readingStatistics/base/ReadingStatisticsFindManyArgs";
import { ReadingStatistics } from "../../readingStatistics/base/ReadingStatistics";
import { ReadingStatisticsWhereUniqueInput } from "../../readingStatistics/base/ReadingStatisticsWhereUniqueInput";

export class LearningResourceControllerBase {
  constructor(protected readonly service: LearningResourceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LearningResource })
  async createLearningResource(
    @common.Body() data: LearningResourceCreateInput
  ): Promise<LearningResource> {
    return await this.service.createLearningResource({
      data: data,
      select: {
        createdAt: true,
        id: true,
        title: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LearningResource] })
  @ApiNestedQuery(LearningResourceFindManyArgs)
  async learningResources(
    @common.Req() request: Request
  ): Promise<LearningResource[]> {
    const args = plainToClass(LearningResourceFindManyArgs, request.query);
    return this.service.learningResources({
      ...args,
      select: {
        createdAt: true,
        id: true,
        title: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LearningResource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async learningResource(
    @common.Param() params: LearningResourceWhereUniqueInput
  ): Promise<LearningResource | null> {
    const result = await this.service.learningResource({
      where: params,
      select: {
        createdAt: true,
        id: true,
        title: true,
        typeField: true,
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
  @swagger.ApiOkResponse({ type: LearningResource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLearningResource(
    @common.Param() params: LearningResourceWhereUniqueInput,
    @common.Body() data: LearningResourceUpdateInput
  ): Promise<LearningResource | null> {
    try {
      return await this.service.updateLearningResource({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          title: true,
          typeField: true,
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
  @swagger.ApiOkResponse({ type: LearningResource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLearningResource(
    @common.Param() params: LearningResourceWhereUniqueInput
  ): Promise<LearningResource | null> {
    try {
      return await this.service.deleteLearningResource({
        where: params,
        select: {
          createdAt: true,
          id: true,
          title: true,
          typeField: true,
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

  @common.Get("/:id/readingStatisticsItems")
  @ApiNestedQuery(ReadingStatisticsFindManyArgs)
  async findReadingStatisticsItems(
    @common.Req() request: Request,
    @common.Param() params: LearningResourceWhereUniqueInput
  ): Promise<ReadingStatistics[]> {
    const query = plainToClass(ReadingStatisticsFindManyArgs, request.query);
    const results = await this.service.findReadingStatisticsItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        learner: {
          select: {
            id: true,
          },
        },

        learningResource: {
          select: {
            id: true,
          },
        },

        readingTime: true,
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

  @common.Post("/:id/readingStatisticsItems")
  async connectReadingStatisticsItems(
    @common.Param() params: LearningResourceWhereUniqueInput,
    @common.Body() body: ReadingStatisticsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      readingStatisticsItems: {
        connect: body,
      },
    };
    await this.service.updateLearningResource({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/readingStatisticsItems")
  async updateReadingStatisticsItems(
    @common.Param() params: LearningResourceWhereUniqueInput,
    @common.Body() body: ReadingStatisticsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      readingStatisticsItems: {
        set: body,
      },
    };
    await this.service.updateLearningResource({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/readingStatisticsItems")
  async disconnectReadingStatisticsItems(
    @common.Param() params: LearningResourceWhereUniqueInput,
    @common.Body() body: ReadingStatisticsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      readingStatisticsItems: {
        disconnect: body,
      },
    };
    await this.service.updateLearningResource({
      where: params,
      data,
      select: { id: true },
    });
  }
}
