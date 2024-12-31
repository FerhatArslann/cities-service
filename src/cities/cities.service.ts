import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CitiesService {
    constructor(@InjectRepository(City) private citiesRepository: Repository<City>) {}

    async findAll(): Promise<City[]> {
       return await this.citiesRepository.find();
    }

    async insertCity(createCityDto: CreateCityDto): Promise<City> {
        let city = this.citiesRepository.create(createCityDto);
        return await this.citiesRepository.save(city);
    }
    async findCityByName(name: string): Promise<City> {
        return await this.citiesRepository.findOne({where: {name: name}});
    }
}
