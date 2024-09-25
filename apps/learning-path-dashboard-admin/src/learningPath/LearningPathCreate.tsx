import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { InstructorTitle } from "../instructor/InstructorTitle";
import { ProgressTitle } from "../progress/ProgressTitle";

export const LearningPathCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
