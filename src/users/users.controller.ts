import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Response, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { PageableDto } from 'src/dto/pageable.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.usersService.create(createUserDto);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(): Promise<CreateUserDto[]> {
    return this.usersService.findAll();
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get('pageable')
  findAllPageable(@Query() pageable: PageableDto): Promise<CreateUserDto[]> {
    return this.usersService.findAllPageable(pageable);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string): Promise<CreateUserDto> {
    return this.usersService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('username/:username')
  findOneByUsername(@Param('username') username: string): Promise<CreateUserDto> {
    return this.usersService.findOneByUsername(username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.usersService.remove(+id);
  }
}
