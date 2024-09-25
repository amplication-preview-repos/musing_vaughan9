import { StringFilter } from "../../util/StringFilter";
import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LearningPathWhereInput = {
  id?: StringFilter;
  instructor?: InstructorWhereUniqueInput;
  progresses?: ProgressListRelationFilter;
  title?: StringNullableFilter;
};
