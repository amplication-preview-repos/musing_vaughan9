import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { InstructorTitle } from "../instructor/InstructorTitle";
import { ProgressTitle } from "../progress/ProgressTitle";

export const LearningPathEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="instructor.id"
          reference="Instructor"
          label="instructor"
        >
          <SelectInput optionText={InstructorTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="progresses" reference="Progress">
          <SelectArrayInput
            optionText={ProgressTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
