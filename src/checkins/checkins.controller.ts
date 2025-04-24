import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('checkins')
export class CheckinsController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getCheckins(@Request() req) {
    return `Check-ins do usuário ${req.user.userId}`;
  }
}
