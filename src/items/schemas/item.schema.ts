import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
  name: string;

  @Prop()
  qty: number;

  @Prop()
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
