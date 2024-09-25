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
import { LearnerWhereInput } from "./LearnerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LearnerOrderByInput } from "./LearnerOrderByInput";

@ArgsType()
class LearnerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LearnerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LearnerWhereInput, { nullable: true })
  @Type(() => LearnerWhereInput)
  where?: LearnerWhereInput;

  @ApiProperty({
    required: false,
    type: [LearnerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LearnerOrderByInput], { nullable: true })
  @Type(() => LearnerOrderByInput)
  orderBy?: Array<LearnerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LearnerFindManyArgs as LearnerFindManyArgs };
