import { LearningPath } from "../learningPath/LearningPath";

export type Instructor = {
  createdAt: Date;
  email: string | null;
  id: string;
  learningPaths?: Array<LearningPath>;
  name: string | null;
  updatedAt: Date;
};
