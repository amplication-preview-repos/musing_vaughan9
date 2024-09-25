import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LearnerList } from "./learner/LearnerList";
import { LearnerCreate } from "./learner/LearnerCreate";
import { LearnerEdit } from "./learner/LearnerEdit";
import { LearnerShow } from "./learner/LearnerShow";
import { InstructorList } from "./instructor/InstructorList";
import { InstructorCreate } from "./instructor/InstructorCreate";
import { InstructorEdit } from "./instructor/InstructorEdit";
import { InstructorShow } from "./instructor/InstructorShow";
import { LearningPathList } from "./learningPath/LearningPathList";
import { LearningPathCreate } from "./learningPath/LearningPathCreate";
import { LearningPathEdit } from "./learningPath/LearningPathEdit";
import { LearningPathShow } from "./learningPath/LearningPathShow";
import { ProgressList } from "./progress/ProgressList";
import { ProgressCreate } from "./progress/ProgressCreate";
import { ProgressEdit } from "./progress/ProgressEdit";
import { ProgressShow } from "./progress/ProgressShow";
import { ReadingStatisticsList } from "./readingStatistics/ReadingStatisticsList";
import { ReadingStatisticsCreate } from "./readingStatistics/ReadingStatisticsCreate";
import { ReadingStatisticsEdit } from "./readingStatistics/ReadingStatisticsEdit";
import { ReadingStatisticsShow } from "./readingStatistics/ReadingStatisticsShow";
import { LearningResourceList } from "./learningResource/LearningResourceList";
import { LearningResourceCreate } from "./learningResource/LearningResourceCreate";
import { LearningResourceEdit } from "./learningResource/LearningResourceEdit";
import { LearningResourceShow } from "./learningResource/LearningResourceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"LearningPathDashboard"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Learner"
          list={LearnerList}
          edit={LearnerEdit}
          create={LearnerCreate}
          show={LearnerShow}
        />
        <Resource
          name="Instructor"
          list={InstructorList}
          edit={InstructorEdit}
          create={InstructorCreate}
          show={InstructorShow}
        />
        <Resource
          name="LearningPath"
          list={LearningPathList}
          edit={LearningPathEdit}
          create={LearningPathCreate}
          show={LearningPathShow}
        />
        <Resource
          name="Progress"
          list={ProgressList}
          edit={ProgressEdit}
          create={ProgressCreate}
          show={ProgressShow}
        />
        <Resource
          name="ReadingStatistics"
          list={ReadingStatisticsList}
          edit={ReadingStatisticsEdit}
          create={ReadingStatisticsCreate}
          show={ReadingStatisticsShow}
        />
        <Resource
          name="LearningResource"
          list={LearningResourceList}
          edit={LearningResourceEdit}
          create={LearningResourceCreate}
          show={LearningResourceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
