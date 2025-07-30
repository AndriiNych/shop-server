import { Body, Controller, Get, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { ProductService } from './product.service';
import { ProductQueryDto } from './dto/product.query.dto';
import { Response } from 'express';
import { ParseQueryPipe } from '@src/util/pipe/api/query/parse.query.pipe';
import { QueryPipeDto } from '@src/util/pipe/api/query/query.pipe.dto';

// @ApiBearerAuth()
// @ApiTags(TABLE_NAMES.customer)
@Controller('/api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  async getProductList(
    @Query(new ParseQueryPipe()) queryPipeDto: QueryPipeDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log('get - getProductList');
    console.log(queryPipeDto);

    const [data, total] = await this.productService.getAllProductListOnlyMainItems(queryPipeDto);

    response.setHeader('X-Total-Count', total.toString());
    response.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');

    return data;
  }

  @Get('/all-main')
  async getAllProductListOnlyMainItems(@Query() productQueryDto: ProductQueryDto) {
    console.log(productQueryDto);
    // return await this.productService.getAllProductListOnlyMainItems(productQueryDto);
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
