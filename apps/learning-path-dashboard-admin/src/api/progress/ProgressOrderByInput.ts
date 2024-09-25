import { SortOrder } from "../../util/SortOrder";

export type ProgressOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  learnerId?: SortOrder;
  learningPathId?: SortOrder;
  progressPercentage?: SortOrder;
  updatedAt?: SortOrder;
};
