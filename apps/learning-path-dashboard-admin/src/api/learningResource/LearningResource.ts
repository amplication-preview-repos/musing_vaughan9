import { ReadingStatistics } from "../readingStatistics/ReadingStatistics";

export type LearningResource = {
  createdAt: Date;
  id: string;
  readingStatisticsItems?: Array<ReadingStatistics>;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
