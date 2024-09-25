import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { LearnerTitle } from "../learner/LearnerTitle";
import { LearningResourceTitle } from "../learningResource/LearningResourceTitle";

export const ReadingStatisticsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="learner.id" reference="Learner" label="learner">
          <SelectInput optionText={LearnerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="learningResource.id"
          reference="LearningResource"
          label="learningResource"
        >
          <SelectInput optionText={LearningResourceTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="readingTime" source="readingTime" />
      </SimpleForm>
    </Create>
  );
};
