import { LearningPathWhereInput } from "./LearningPathWhereInput";
import { LearningPathOrderByInput } from "./LearningPathOrderByInput";

export type LearningPathFindManyArgs = {
  where?: LearningPathWhereInput;
  orderBy?: Array<LearningPathOrderByInput>;
  skip?: number;
  take?: number;
};
