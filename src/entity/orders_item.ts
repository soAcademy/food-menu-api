import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class OrdersItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column()
  menu_id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  total_price: number;
}
