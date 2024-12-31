import { Field, ObjectType } from '@nestjs/graphql';
import { LocationModel } from '../../locations/models/location.model';

@ObjectType()
export class CityModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  country_code: string;

  @Field(() => [LocationModel], { nullable: true })
  locations?: LocationModel[];
}
