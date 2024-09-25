import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LearningPathListRelationFilter } from "../learningPath/LearningPathListRelationFilter";

export type InstructorWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  learningPaths?: LearningPathListRelationFilter;
  name?: StringNullableFilter;
};
