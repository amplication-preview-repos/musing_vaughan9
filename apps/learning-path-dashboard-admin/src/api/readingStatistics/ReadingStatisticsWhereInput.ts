import { StringFilter } from "../../util/StringFilter";
import { LearnerWhereUniqueInput } from "../learner/LearnerWhereUniqueInput";
import { LearningResourceWhereUniqueInput } from "../learningResource/LearningResourceWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReadingStatisticsWhereInput = {
  id?: StringFilter;
  learner?: LearnerWhereUniqueInput;
  learningResource?: LearningResourceWhereUniqueInput;
  readingTime?: IntNullableFilter;
};
