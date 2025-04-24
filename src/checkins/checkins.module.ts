import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Checkin } from './checkin.entity';
import { CheckinsController } from './checkins.controller';
import { CheckinsService } from './checkins.service';

@Module({
    imports: [TypeOrmModule.forFeature([Checkin])],
    providers: [CheckinsService],
    exports: [CheckinsService],
    controllers: [CheckinsController]

})
export class CheckinsModule { }
