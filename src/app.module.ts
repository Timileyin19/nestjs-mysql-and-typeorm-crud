import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './media/media.entity';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'stereo_media',
      entities: [Media],
      synchronize: true,
    }),
    MediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
