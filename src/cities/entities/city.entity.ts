import { Location } from "src/locations/entities/location.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  country_code: string;

  @OneToMany(() => Location, (location) => location.city, { nullable: true, cascade: true })
  locations: Location[];
}
