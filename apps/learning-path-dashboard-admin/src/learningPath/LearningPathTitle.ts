import { LearningPath as TLearningPath } from "../api/learningPath/LearningPath";

export const LEARNINGPATH_TITLE_FIELD = "title";

export const LearningPathTitle = (record: TLearningPath): string => {
  return record.title?.toString() || String(record.id);
};
