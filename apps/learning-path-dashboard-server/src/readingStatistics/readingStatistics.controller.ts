import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReadingStatisticsService } from "./readingStatistics.service";
import { ReadingStatisticsControllerBase } from "./base/readingStatistics.controller.base";

@swagger.ApiTags("readingStatistics")
@common.Controller("readingStatistics")
export class ReadingStatisticsController extends ReadingStatisticsControllerBase {
  constructor(protected readonly service: ReadingStatisticsService) {
    super(service);
  }
}
