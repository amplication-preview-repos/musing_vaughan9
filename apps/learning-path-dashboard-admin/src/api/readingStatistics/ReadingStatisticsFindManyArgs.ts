import { ReadingStatisticsWhereInput } from "./ReadingStatisticsWhereInput";
import { ReadingStatisticsOrderByInput } from "./ReadingStatisticsOrderByInput";

export type ReadingStatisticsFindManyArgs = {
  where?: ReadingStatisticsWhereInput;
  orderBy?: Array<ReadingStatisticsOrderByInput>;
  skip?: number;
  take?: number;
};
