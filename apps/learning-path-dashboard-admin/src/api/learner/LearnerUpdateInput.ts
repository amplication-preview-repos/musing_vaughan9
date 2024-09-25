import { ProgressUpdateManyWithoutLearnersInput } from "./ProgressUpdateManyWithoutLearnersInput";
import { ReadingStatisticsUpdateManyWithoutLearnersInput } from "./ReadingStatisticsUpdateManyWithoutLearnersInput";

export type LearnerUpdateInput = {
  email?: string | null;
  name?: string | null;
  progresses?: ProgressUpdateManyWithoutLearnersInput;
  readingStatisticsItems?: ReadingStatisticsUpdateManyWithoutLearnersInput;
};
