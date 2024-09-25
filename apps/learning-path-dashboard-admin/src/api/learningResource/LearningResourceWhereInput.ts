import { StringFilter } from "../../util/StringFilter";
import { ReadingStatisticsListRelationFilter } from "../readingStatistics/ReadingStatisticsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LearningResourceWhereInput = {
  id?: StringFilter;
  readingStatisticsItems?: ReadingStatisticsListRelationFilter;
  title?: StringNullableFilter;
  typeField?: "Option1";
};
