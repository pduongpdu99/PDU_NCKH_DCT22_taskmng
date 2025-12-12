import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@common/modules/db';
import { ThrottlerModule } from '@nestjs/throttler';
import CONFIGURATION from '@common/const';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: ".env.development.local"
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: CONFIGURATION.RATE_LIMITING.TTL,
          limit: CONFIGURATION.RATE_LIMITING.LIMIT
        }
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
