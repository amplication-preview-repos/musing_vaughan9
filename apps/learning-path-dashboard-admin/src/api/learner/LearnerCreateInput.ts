import { ProgressCreateNestedManyWithoutLearnersInput } from "./ProgressCreateNestedManyWithoutLearnersInput";
import { ReadingStatisticsCreateNestedManyWithoutLearnersInput } from "./ReadingStatisticsCreateNestedManyWithoutLearnersInput";

export type LearnerCreateInput = {
  email?: string | null;
  name?: string | null;
  progresses?: ProgressCreateNestedManyWithoutLearnersInput;
  readingStatisticsItems?: ReadingStatisticsCreateNestedManyWithoutLearnersInput;
};
