import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { ProgressUpdateManyWithoutLearningPathsInput } from "./ProgressUpdateManyWithoutLearningPathsInput";

export type LearningPathUpdateInput = {
  instructor?: InstructorWhereUniqueInput | null;
  progresses?: ProgressUpdateManyWithoutLearningPathsInput;
  title?: string | null;
};
