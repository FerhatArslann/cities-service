import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CityModel } from './models/city.model';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';

@Resolver((of) => CityModel)
export class CitiesResolver {
    constructor(private readonly citiesService: CitiesService) {}

    @Query(() => [CityModel])
    async getCities(): Promise<CityModel[]> {
        let cities = await this.citiesService.findAll();
        return cities as unknown as CityModel[];
    }

    @Mutation(() => CityModel)
    async createCity(@Args('createCityInput') createCityDto: CreateCityDto): Promise<CityModel> {
        return await this.citiesService.insertCity(createCityDto) as CityModel;
    }
}
