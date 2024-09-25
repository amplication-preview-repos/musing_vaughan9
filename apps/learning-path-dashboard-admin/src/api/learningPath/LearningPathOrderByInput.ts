import { SortOrder } from "../../util/SortOrder";

export type LearningPathOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  instructorId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
