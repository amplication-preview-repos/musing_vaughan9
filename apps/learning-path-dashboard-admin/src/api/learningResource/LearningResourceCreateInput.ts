import { ReadingStatisticsCreateNestedManyWithoutLearningResourcesInput } from "./ReadingStatisticsCreateNestedManyWithoutLearningResourcesInput";

export type LearningResourceCreateInput = {
  readingStatisticsItems?: ReadingStatisticsCreateNestedManyWithoutLearningResourcesInput;
  title?: string | null;
  typeField?: "Option1" | null;
};
