import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  category: string;
}
