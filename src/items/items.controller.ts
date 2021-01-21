import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res
} from "@nestjs/common";
import { CreateItemDto } from "./dto/create-item.dto";
// import { Request, Response } from "express";
import { ItemsService } from "./items.service";
import { Item } from "./interfaces/item.interface";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  /*

  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Gello');
  }
*/

  @Get(":id")
  async findOne(@Param() param): Promise<Item> {
    // OR @Param('id') id
    return this.itemsService.findOne(param.id);
  }

  @Post()
  create(@Body() creatItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(creatItemDto);
  }

  @Put(":id")
  update(@Body() updateItemDto: CreateItemDto, @Param("id") id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(":id")
  delete(@Param("id") id): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
