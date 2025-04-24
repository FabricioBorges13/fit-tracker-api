import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private _service: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getUsers() {
        return this._service.findUsers();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("byEmail")
    getUserByEmail(@Request() req) {
        const email  = req.body?.email;
        return this._service.findByEmail(email);
    }
}
