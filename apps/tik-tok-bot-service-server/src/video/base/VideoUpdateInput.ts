/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ScheduleUpdateManyWithoutVideosInput } from "./ScheduleUpdateManyWithoutVideosInput";
import { Type } from "class-transformer";

@InputType()
class VideoUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hashtags?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  path?: string | null;

  @ApiProperty({
    required: false,
    type: () => ScheduleUpdateManyWithoutVideosInput,
  })
  @ValidateNested()
  @Type(() => ScheduleUpdateManyWithoutVideosInput)
  @IsOptional()
  @Field(() => ScheduleUpdateManyWithoutVideosInput, {
    nullable: true,
  })
  schedules?: ScheduleUpdateManyWithoutVideosInput;
}

export { VideoUpdateInput as VideoUpdateInput };