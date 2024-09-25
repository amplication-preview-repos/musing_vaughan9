import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LEARNER_TITLE_FIELD } from "../learner/LearnerTitle";
import { LEARNINGPATH_TITLE_FIELD } from "../learningPath/LearningPathTitle";

export const ProgressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Progresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
