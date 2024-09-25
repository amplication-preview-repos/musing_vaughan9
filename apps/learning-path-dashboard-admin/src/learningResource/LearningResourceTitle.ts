import { LearningResource as TLearningResource } from "../api/learningResource/LearningResource";

export const LEARNINGRESOURCE_TITLE_FIELD = "title";

export const LearningResourceTitle = (record: TLearningResource): string => {
  return record.title?.toString() || String(record.id);
};
