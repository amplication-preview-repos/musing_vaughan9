import * as graphql from "@nestjs/graphql";
import { ReadingStatisticsResolverBase } from "./base/readingStatistics.resolver.base";
import { ReadingStatistics } from "./base/ReadingStatistics";
import { ReadingStatisticsService } from "./readingStatistics.service";

@graphql.Resolver(() => ReadingStatistics)
export class ReadingStatisticsResolver extends ReadingStatisticsResolverBase {
  constructor(protected readonly service: ReadingStatisticsService) {
    super(service);
  }
}
