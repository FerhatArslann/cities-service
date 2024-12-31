import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

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

    async deleteCity(id: string): Promise<boolean> {
        const result = await this.citiesRepository.delete(id);
        return result.affected > 0;
    }

    async updateCity(id: string, updateCityDto: UpdateCityDto): Promise<City> {
        await this.citiesRepository.update(id, updateCityDto);
        return await this.citiesRepository.findOneBy({ id });
    }

    async findOne(id: string): Promise<City> {
        return await this.citiesRepository.findOneBy({ id });
    }
}
