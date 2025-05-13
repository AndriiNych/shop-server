import { Body, Controller, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { CategoryDescriptionService } from './category-description.service';

// @ApiBearerAuth()
// @ApiTags(TABLE_NAMES.customer)
@Controller(TABLE_NAMES.category_description)
export class CategoryDescriptionController {
  constructor(private readonly categoryDescriptionService: CategoryDescriptionService) {}
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
