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
import { LEARNINGRESOURCE_TITLE_FIELD } from "../learningResource/LearningResourceTitle";

export const ReadingStatisticsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ReadingStatisticsItems"}
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
          label="learningResource"
          source="learningresource.id"
          reference="LearningResource"
        >
          <TextField source={LEARNINGRESOURCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="readingTime" source="readingTime" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
