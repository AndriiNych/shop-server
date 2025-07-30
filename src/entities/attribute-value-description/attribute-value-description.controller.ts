import { Body, Controller, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { AttributeValueDescriptionService } from './attribute-value-description.service';
import { getPoint } from '@src/util/api-site/get.point';

// @ApiBearerAuth()
// @ApiTags(TABLE_NAMES.customer)
@Controller(getPoint(TABLE_NAMES.attribute_value_description))
export class AttributeValueDescriptionController {
  constructor(private readonly attributeValueDescriptioService: AttributeValueDescriptionService) {}

  @Get('/synch')
  async synchronize() {
    return await this.attributeValueDescriptioService.synchWithAttributeValue();
  }
  // @Get('/')
  //   async getAllCustomers(@Query() customerQueryParamsDto: CustomerQueryParamsDto) {
  //     return await this.customerService.getAllCustomers(customerQueryParamsDto);
  //   }
  //   @Get('/:phone')
  //   async getCustomerByPhone(@Param() customerParamsDto: CustomerParamsDto) {
  //     return await this.customerService.getCustomerByPhoneBase(customerParamsDto);
  //   }
  //   @Patch(':phone')
  //   async patchCustomerPhoneNumber(
  //     @Param() customerParamsDto: CustomerParamsDto,
  //     @Body() customerPhonePatchDto: CustomerPhonePatchDto,
  //   ) {
  //     return await this.customerService.changePhoneNumber(customerParamsDto, customerPhonePatchDto);
  //   }
  //   @Post('single')
  //   async createCustomer(@Body() customer: CustomerDto) {
  //     return await this.customerService.createCustomer(customer);
  //   }
  //   @Post('multiple')
  //   async createCustomers(@Body() customers: CustomersDto) {
  //     return await this.customerService.createCustomers(customers);
  //   }
  //   @Put(':phone')
  //   async updateCustomer(
  //     @Param() customerParamsDto: CustomerParamsDto,
  //     @Body() customerUpdateDto: CustomerUpdateDto,
  //   ) {
  //     return await this.customerService.updateCustomerByPhone(customerParamsDto, customerUpdateDto);
  //   }
}
