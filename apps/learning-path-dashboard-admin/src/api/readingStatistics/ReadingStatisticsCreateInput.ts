import { LearnerWhereUniqueInput } from "../learner/LearnerWhereUniqueInput";
import { LearningResourceWhereUniqueInput } from "../learningResource/LearningResourceWhereUniqueInput";

export type ReadingStatisticsCreateInput = {
  learner?: LearnerWhereUniqueInput | null;
  learningResource?: LearningResourceWhereUniqueInput | null;
  readingTime?: number | null;
};
