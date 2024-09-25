import { Learner } from "../learner/Learner";
import { LearningPath } from "../learningPath/LearningPath";

export type Progress = {
  createdAt: Date;
  id: string;
  learner?: Learner | null;
  learningPath?: LearningPath | null;
  progressPercentage: number | null;
  updatedAt: Date;
};
