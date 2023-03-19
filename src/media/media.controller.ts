import { Get, Controller, Post, Body, Query, Param, Patch, Delete } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './media.dto';

@Controller('media')
export class MediaController {
    constructor(private readonly mediaService: MediaService) {}
   
    @Get('search') 
    async searchMedia(@Query('query') query: string) {
        return await this.mediaService.fetchMediaBySearch(query);
    }

    @Get()
    async fetchMedia(@Query('page') page: number = 1, @Query('perPage') perPage: number = 12) {
        return await this.mediaService.fetchPaginatedMedia(page, perPage);
    }

    @Get(':identity') 
    async fetchById(@Param('identity') identity: string) {
        return await this.mediaService.fetchById(identity);
    }

    @Post()
    async create(@Body() media: CreateMediaDto) {
        return await this.mediaService.create(media);
    }

    @Patch(':id') 
    async updateMedia(@Param('id') id: string, @Body() update: { status: string }) {
        return await this.mediaService.updateMedia(id, update);

    } 

    @Delete(':id')
    async softDeleteMedia(@Param('id') id: string) {
        return await this.mediaService.softDeleteMedia(id);
    }    
}