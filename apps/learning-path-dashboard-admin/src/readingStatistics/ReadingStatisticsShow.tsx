import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LEARNER_TITLE_FIELD } from "../learner/LearnerTitle";
import { LEARNINGRESOURCE_TITLE_FIELD } from "../learningResource/LearningResourceTitle";

export const ReadingStatisticsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="learner" source="learner.id" reference="Learner">
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
      </SimpleShowLayout>
    </Show>
  );
};
