import { Progress } from "../progress/Progress";
import { ReadingStatistics } from "../readingStatistics/ReadingStatistics";

export type Learner = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  progresses?: Array<Progress>;
  readingStatisticsItems?: Array<ReadingStatistics>;
  updatedAt: Date;
};
