import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('users') // /users
export class UsersController {
  /*

    GET     /users
    GET     /users:id
    POST    /users
    PATCH   /users:id

  */

  @Get() // GET  /users
  findAll() {
    return [];
  }

  @Get(':id') // GET  /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST  /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') //PATCH   /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE  /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
