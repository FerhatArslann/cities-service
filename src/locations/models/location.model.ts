import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LocationModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  streetAddress: string;
}
