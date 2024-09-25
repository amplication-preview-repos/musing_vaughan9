import { Learner } from "../learner/Learner";
import { LearningResource } from "../learningResource/LearningResource";

export type ReadingStatistics = {
  createdAt: Date;
  id: string;
  learner?: Learner | null;
  learningResource?: LearningResource | null;
  readingTime: number | null;
  updatedAt: Date;
};
