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
import { TikTokAccountWhereUniqueInput } from "./TikTokAccountWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TikTokAccountUpdateInput } from "./TikTokAccountUpdateInput";

@ArgsType()
class UpdateTikTokAccountArgs {
  @ApiProperty({
    required: true,
    type: () => TikTokAccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TikTokAccountWhereUniqueInput)
  @Field(() => TikTokAccountWhereUniqueInput, { nullable: false })
  where!: TikTokAccountWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TikTokAccountUpdateInput,
  })
  @ValidateNested()
  @Type(() => TikTokAccountUpdateInput)
  @Field(() => TikTokAccountUpdateInput, { nullable: false })
  data!: TikTokAccountUpdateInput;
}

export { UpdateTikTokAccountArgs as UpdateTikTokAccountArgs };