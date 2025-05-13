import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { ProductSpecial } from './product-special.entity';

@Injectable()
export class ProductSpecialService {
  constructor(
    @InjectRepository(ProductSpecial)
    private readonly productSpecialRepository: Repository<ProductSpecial>,
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
