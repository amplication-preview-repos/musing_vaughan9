/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LearnerWhereUniqueInput } from "./LearnerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteLearnerArgs {
  @ApiProperty({
    required: true,
    type: () => LearnerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LearnerWhereUniqueInput)
  @Field(() => LearnerWhereUniqueInput, { nullable: false })
  where!: LearnerWhereUniqueInput;
}

export { DeleteLearnerArgs as DeleteLearnerArgs };
