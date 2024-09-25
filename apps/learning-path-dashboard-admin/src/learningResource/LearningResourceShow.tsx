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

import { LEARNER_TITLE_FIELD } from "../learner/LearnerTitle";
import { LEARNINGRESOURCE_TITLE_FIELD } from "./LearningResourceTitle";

export const LearningResourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ReadingStatistics"
          target="learningResourceId"
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
