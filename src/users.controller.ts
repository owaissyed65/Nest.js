import {
  Controller,
  Get,
  HttpCode,
  Req,
  HttpStatus,
  Res,
  Param,
  Redirect,
  Header,
  Headers,
  Post,
  Body,
  Ip,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { of } from 'rxjs';
import { CreateUserdto } from './dto';

// @Controller('/user')
// export class UsersController {
//   @Get('/profile')
//   //   @HttpCode(300)
//   @HttpCode(HttpStatus?.PAYMENT_REQUIRED)
//   getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
//     console.log(req.ip);
//     return {
//       hello: 'Pwoas',
//     };
//   }
// }

/**     for dynamic routing   */
// @Controller('/user')
// export class UsersController {
//  @Get('/video/:id')

//   getProfile(
//     @Req() req: Request,
//     @Res({ passthrough: true }) res: Response,
//     @Param() param: Record<string, any>,
//     @Headers() header
//   ) {
//     console.log(req.params);
//     console.log(header);

//     return {
//       params: param,
//     };
//   }
// }

// confusion
// Header - Set Response Header
// Headers - Set Request Header

// for body data
// @Controller('/user')
// export class UsersController {
//   @Post('/')
//   addBody(@Body() body, @Headers("content-type") head) {
//     console.log(head);
//     return {
//       success: true,
//       data: body,
//     };
//   }
// }

const users = [];
// for crud operation and ip
@Controller('/users')
export class UsersController {
  @Post('/')
  addUser(@Body() createUserDto: CreateUserdto) {
    users.push(createUserDto);
    return 'User Added';
  }
  @Get('/')
  getUser(@Ip() ip) {
    console.log(ip);
    return users;
  }
}
