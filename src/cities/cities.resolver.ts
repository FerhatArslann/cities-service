import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CityModel } from './models/city.model';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Resolver((of) => CityModel)
export class CitiesResolver {
    constructor(private readonly citiesService: CitiesService) {}

    @Query(() => [CityModel])
    async getCities(): Promise<CityModel[]> {
        let cities = await this.citiesService.findAll();
        return cities as unknown as CityModel[];
    }

    @Query(() => CityModel, { nullable: true })
    async getCity(@Args('id') id: string): Promise<CityModel> {
        return await this.citiesService.findOne(id) as CityModel;
    }

    @Mutation(() => CityModel)
    async createCity(@Args('createCityInput') createCityDto: CreateCityDto): Promise<CityModel> {
        return await this.citiesService.insertCity(createCityDto) as CityModel;
    }

    @Mutation(() => CityModel)
    async updateCity(
        @Args('id') id: string,
        @Args('updateCityInput') updateCityDto: UpdateCityDto,
    ): Promise<CityModel> {
        return await this.citiesService.updateCity(id, updateCityDto) as CityModel;
    }

    @Mutation(() => Boolean)
    async deleteCity(@Args('id') id: string): Promise<boolean> {
        return await this.citiesService.deleteCity(id);
    }
}
