import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LEARNER_TITLE_FIELD } from "./LearnerTitle";
import { LEARNINGPATH_TITLE_FIELD } from "../learningPath/LearningPathTitle";
import { LEARNINGRESOURCE_TITLE_FIELD } from "../learningResource/LearningResourceTitle";

export const LearnerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Progress"
          target="learnerId"
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
        <ReferenceManyField
          reference="ReadingStatistics"
          target="learnerId"
          label="ReadingStatisticsItems"
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
              label="learningResource"
              source="learningresource.id"
              reference="LearningResource"
            >
              <TextField source={LEARNINGRESOURCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="readingTime" source="readingTime" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
