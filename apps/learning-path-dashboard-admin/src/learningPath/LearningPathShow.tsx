import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LEARNER_TITLE_FIELD } from "../learner/LearnerTitle";
import { LEARNINGPATH_TITLE_FIELD } from "./LearningPathTitle";
import { INSTRUCTOR_TITLE_FIELD } from "../instructor/InstructorTitle";

export const LearningPathShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="instructor"
          source="instructor.id"
          reference="Instructor"
        >
          <TextField source={INSTRUCTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Progress"
          target="learningPathId"
          label="Progresses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="learner"
              source="learner.id"
              reference="Learner"
            >
              <TextField source={LEARNER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="learningPath"
              source="learningpath.id"
              reference="LearningPath"
            >
              <TextField source={LEARNINGPATH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="progressPercentage" source="progressPercentage" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
