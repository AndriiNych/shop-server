import { Body, Controller, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { UserService } from './user.service';

// @ApiBearerAuth()
// @ApiTags(TABLE_NAMES.customer)
//TODO @Controller(TABLE_NAMES.auth)
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    return await this.userService.register(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const result = await this.userService.login(body.email, body.password);
    console.log(result);
    return result;
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
