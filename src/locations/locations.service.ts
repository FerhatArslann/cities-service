import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CitiesService } from 'src/cities/cities.service';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {

    constructor(@InjectRepository(Location) private locationsRepository: Repository<Location>,
        private citiesService: CitiesService) {}
    
    async findAll(): Promise<Location[]> {
        return await this.locationsRepository.find();
    }

    async findLocationsOfACity(cityName: string): Promise<Location[]> {
        const city = await this.citiesService.findCityByName(cityName);
        if (!city) {
            throw new NotFoundException('City ${cityName} not found');
        }

        return await this.locationsRepository.find({where: {city: city}});
    }

    async insertLocation(cityName: string, createLocationDto: CreateLocationDto): Promise<Location> {
        const city = await this.citiesService.findCityByName(cityName);
        if (!city) {
            throw new NotFoundException('City ${cityName} not found');
        }
        let location = this.locationsRepository.create(createLocationDto);
        location.city = city;
        return await this.locationsRepository.save(location);
    }
}
