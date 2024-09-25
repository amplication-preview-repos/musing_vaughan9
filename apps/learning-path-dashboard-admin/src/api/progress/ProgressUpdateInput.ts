import { LearnerWhereUniqueInput } from "../learner/LearnerWhereUniqueInput";
import { LearningPathWhereUniqueInput } from "../learningPath/LearningPathWhereUniqueInput";

export type ProgressUpdateInput = {
  learner?: LearnerWhereUniqueInput | null;
  learningPath?: LearningPathWhereUniqueInput | null;
  progressPercentage?: number | null;
};
