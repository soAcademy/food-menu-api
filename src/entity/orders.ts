import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrdersItem } from "./orders_item";

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  table_id: number;

  @OneToMany(() => OrdersItem, (ordersItem) => ordersItem.order_id, {
    cascade: true,
  })
  items: OrdersItem[];
}
