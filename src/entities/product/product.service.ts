import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  //   public async getAllCustomers(
  //     customerQueryParamsDto: CustomerQueryParamsDto,
  //   ): Promise<ResponseWrapperDto<CustomerResponseDto>> {
  //     const query = this.getQueryByCriterial(customerQueryParamsDto);

  //     const result = await query.getMany();

  //     return responseWrapper(result, CustomerResponseDto);
  //   }

  //   public async getCustomerById(id: number): Promise<CustomerDto> {
  //     return await this.fetchCustomerByIdWithValidation(id);
  //   }
}
