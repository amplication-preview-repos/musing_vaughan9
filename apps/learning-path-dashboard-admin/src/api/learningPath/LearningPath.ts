import { Instructor } from "../instructor/Instructor";
import { Progress } from "../progress/Progress";

export type LearningPath = {
  createdAt: Date;
  id: string;
  instructor?: Instructor | null;
  progresses?: Array<Progress>;
  title: string | null;
  updatedAt: Date;
};
