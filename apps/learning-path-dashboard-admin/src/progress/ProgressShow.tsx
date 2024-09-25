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
import { LEARNINGPATH_TITLE_FIELD } from "../learningPath/LearningPathTitle";

export const ProgressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="learner" source="learner.id" reference="Learner">
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
      </SimpleShowLayout>
    </Show>
  );
};
