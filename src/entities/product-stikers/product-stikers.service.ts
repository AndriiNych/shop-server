import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { ProductStickers } from './product-stikers.entity';
import { IN_ES_TYPE } from '@src/type/in-es.type';

export type ProductStickersType = Partial<InstanceType<typeof ProductStickers>>;
const STICKER = {
  NEW: 1,
  SALE: 2,
};

@Injectable()
export class ProductStickersService {
  constructor(
    @InjectRepository(ProductStickers)
    private readonly ProductStickersRepository: Repository<ProductStickers>,
  ) {}

  public async getProductStickers(conditions): Promise<ProductStickers[]> {
    return await this.ProductStickersRepository.find({ where: conditions });
  }

  public async updateProductStickersById(id: number, data) {
    return await this.ProductStickersRepository.update({ id }, data);
  }

  public async saveProductStickers(stickers: ProductStickersType): Promise<ProductStickers> {
    const stickersNew = this.ProductStickersRepository.create(stickers);

    return await this.ProductStickersRepository.save(stickersNew);
  }

  public createNewProductStickers(productId: number) {
    const stickerNew = {
      productId: productId,
      stickerId: STICKER.NEW,
      inEs: IN_ES_TYPE.CREATE,
    };

    return stickerNew;
  }
}
