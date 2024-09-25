import { StringFilter } from "../../util/StringFilter";
import { LearnerWhereUniqueInput } from "../learner/LearnerWhereUniqueInput";
import { LearningPathWhereUniqueInput } from "../learningPath/LearningPathWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProgressWhereInput = {
  id?: StringFilter;
  learner?: LearnerWhereUniqueInput;
  learningPath?: LearningPathWhereUniqueInput;
  progressPercentage?: IntNullableFilter;
};
