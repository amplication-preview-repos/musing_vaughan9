import { Learner as TLearner } from "../api/learner/Learner";

export const LEARNER_TITLE_FIELD = "name";

export const LearnerTitle = (record: TLearner): string => {
  return record.name?.toString() || String(record.id);
};
