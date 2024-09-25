import { LearningPathUpdateManyWithoutInstructorsInput } from "./LearningPathUpdateManyWithoutInstructorsInput";

export type InstructorUpdateInput = {
  email?: string | null;
  learningPaths?: LearningPathUpdateManyWithoutInstructorsInput;
  name?: string | null;
};
