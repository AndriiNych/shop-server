import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { AttributeValueDescription } from './attribute-value-description.entity';

// import { Customer } from './customer.entity';
// import { CustomerDto } from './dto/customer.dto';
// import { CustomerResponseDto } from './dto/customer.response.dto';
// import { responseWrapper } from '@src/utils/response-wrapper/response-wrapper';
// import { ResponseWrapperDto } from '@src/utils/response-wrapper/dto/response-wrapper.dto';
// import { CustomerUpdateDto } from './dto/customer.update.dto';
// import { CustomerParamsDto } from './dto/customer.params.dto';
// import { CustomerQueryParamsDto } from './dto/customer.query.params.dto';
// import { CustomerPhonePatchDto } from './dto/customer-phone.patch.dto';
// import { TABLE_NAMES } from '@src/db/const-tables';
// import { CustomerUpdateBonusDto } from './dto/customer.update.bonus.dto';
// import { MSG } from '@src/utils/get.message';

@Injectable()
export class AttributeValueDescriptionService {
  constructor(
    @InjectRepository(AttributeValueDescription)
    private readonly attributeValueDescriptionRepository: Repository<AttributeValueDescription>,
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
