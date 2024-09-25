import { SortOrder } from "../../util/SortOrder";

export type ReadingStatisticsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  learnerId?: SortOrder;
  learningResourceId?: SortOrder;
  readingTime?: SortOrder;
  updatedAt?: SortOrder;
};
