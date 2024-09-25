import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { LearnerTitle } from "../learner/LearnerTitle";
import { LearningPathTitle } from "../learningPath/LearningPathTitle";

export const ProgressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="learner.id" reference="Learner" label="learner">
          <SelectInput optionText={LearnerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="learningPath.id"
          reference="LearningPath"
          label="learningPath"
        >
          <SelectInput optionText={LearningPathTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="progressPercentage"
          source="progressPercentage"
        />
      </SimpleForm>
    </Edit>
  );
};
