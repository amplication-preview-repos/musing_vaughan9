import { LearnerWhereInput } from "./LearnerWhereInput";
import { LearnerOrderByInput } from "./LearnerOrderByInput";

export type LearnerFindManyArgs = {
  where?: LearnerWhereInput;
  orderBy?: Array<LearnerOrderByInput>;
  skip?: number;
  take?: number;
};
