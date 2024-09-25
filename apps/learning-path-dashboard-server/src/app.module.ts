import { Module } from "@nestjs/common";
import { LearnerModule } from "./learner/learner.module";
import { InstructorModule } from "./instructor/instructor.module";
import { LearningPathModule } from "./learningPath/learningPath.module";
import { ProgressModule } from "./progress/progress.module";
import { ReadingStatisticsModule } from "./readingStatistics/readingStatistics.module";
import { LearningResourceModule } from "./learningResource/learningResource.module";
import { LearningDashboardModule } from "./learningdashboard/learningdashboard.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    LearnerModule,
    InstructorModule,
    LearningPathModule,
    ProgressModule,
    ReadingStatisticsModule,
    LearningResourceModule,
    LearningDashboardModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
