import { LearningPathCreateNestedManyWithoutInstructorsInput } from "./LearningPathCreateNestedManyWithoutInstructorsInput";

export type InstructorCreateInput = {
  email?: string | null;
  learningPaths?: LearningPathCreateNestedManyWithoutInstructorsInput;
  name?: string | null;
};
