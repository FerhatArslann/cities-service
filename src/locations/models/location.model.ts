import { Field, ObjectType } from "@nestjs/graphql";
import { CityModel } from '../../cities/models/city.model';

@ObjectType()
export class LocationModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  streetAddress: string;

  @Field(() => CityModel, { nullable: true })
  city?: CityModel;
}
