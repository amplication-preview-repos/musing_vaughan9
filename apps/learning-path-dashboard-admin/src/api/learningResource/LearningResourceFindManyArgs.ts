import { LearningResourceWhereInput } from "./LearningResourceWhereInput";
import { LearningResourceOrderByInput } from "./LearningResourceOrderByInput";

export type LearningResourceFindManyArgs = {
  where?: LearningResourceWhereInput;
  orderBy?: Array<LearningResourceOrderByInput>;
  skip?: number;
  take?: number;
};
