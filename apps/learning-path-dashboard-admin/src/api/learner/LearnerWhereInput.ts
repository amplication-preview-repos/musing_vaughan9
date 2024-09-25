import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";
import { ReadingStatisticsListRelationFilter } from "../readingStatistics/ReadingStatisticsListRelationFilter";

export type LearnerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  progresses?: ProgressListRelationFilter;
  readingStatisticsItems?: ReadingStatisticsListRelationFilter;
};
