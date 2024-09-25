import { SortOrder } from "../../util/SortOrder";

export type LearningResourceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
