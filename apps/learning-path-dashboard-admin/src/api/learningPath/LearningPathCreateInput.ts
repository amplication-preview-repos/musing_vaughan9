import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { ProgressCreateNestedManyWithoutLearningPathsInput } from "./ProgressCreateNestedManyWithoutLearningPathsInput";

export type LearningPathCreateInput = {
  instructor?: InstructorWhereUniqueInput | null;
  progresses?: ProgressCreateNestedManyWithoutLearningPathsInput;
  title?: string | null;
};
