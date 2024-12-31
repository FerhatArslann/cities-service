import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocationModel } from './models/location.model';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Resolver((of) => LocationModel)
export class LocationsResolver {
    constructor(private readonly locationsService: LocationsService) {}

    @Query(() => [LocationModel])
    async getLocations(): Promise<LocationModel[]> {
        let location = await this.locationsService.findAll();
        return location as unknown as LocationModel[];
    }

    @Query(() => LocationModel)
    async getLocationOfACity(@Args('city') city: string): Promise<LocationModel> {
        const locations = await this.locationsService.findLocationsOfACity(city);
        return locations[0] as LocationModel;
    }

    @Mutation(() => LocationModel)
    async createLocation(
        @Args('city') city: string,
        @Args('createLocationInput') createLocationDto: CreateLocationDto): Promise<LocationModel> {
        return await this.locationsService.insertLocation(city, createLocationDto) as unknown as LocationModel;
    }
}
