import { Injectable, NotFoundException }  from '@nestjs/common';
import { Media } from './media.entity';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMediaParams } from 'src/utils/types';


@Injectable()
export class MediaService {
    constructor(
        @InjectRepository(Media)
        private mediaRepository: Repository<Media>,
    ) {}

    async create(media: CreateMediaParams) {
        try {
            const newMedia = this.mediaRepository.create({
                ...media,
                status: 'active',
                createdAt: new Date(),
                updatedAt: new Date()
            });
            const createdMedia = await this.mediaRepository.save(newMedia);
            return {
                status: 'success',
                message: 'Media created successfully',
                data: createdMedia
            };
        } catch(error) {
            return {
                status: 'error',
                message: 'Media not created successfully.',
                data: {}
            };
    
        }
       }

   async fetchPaginatedMedia(page: number, perPage: number) {
    try {
        const media = await this.mediaRepository.find({
            where: { isDeleted: false },
            skip: (page - 1) * perPage,
            take: perPage
        });
        return {
            status: 'success',
            message: 'Media fetched successfully',
            data: media
        };
    } catch(error) {
        return {
            status: 'error',
            message: 'Media not fetched successfully.',
            data: {}
        };
    }
   }

   async fetchById(identity: string) {
    try {
        const media = await this.mediaRepository.find({ where: { id: identity, isDeleted: false } });

        return {
            status: 'success',
            message: 'Media fetched successfully',
            data: media.length > 0 ? media[0] : {}
        };

    } catch (error) {
        return {
            status: 'error',
            message: 'Media not fetched successfully',
            data: {}
        };
    }
   }

   async fetchMediaBySearch(query: string) {
    try {
        const response = await this.mediaRepository.find({
            where: [
                { name: ILike(`%${query}%`) },
                { description: ILike(`%${query}%`) },
            ],
        });

        return {
            status: 'success',
            message: 'Media fetched using search query successfully',
            data: response
        };
    } catch(error) {
        return {
            status: 'error',
            message: 'Error encountered while fetching media using the search keyword',
            data: {}
        };

    }
   }

   async updateMedia(id: string, update: { status: string }) {
    try {
        const mediaArray = await this.mediaRepository.find({ where: { id: id, isDeleted: false } });

        const media = mediaArray[0]; 

        if (!media) {
            throw new NotFoundException('Media not found')
        }
    
        media.status = update.status;
        media.updatedAt = new Date();
        await this.mediaRepository.save(media);
    
        return {
            status: 'success',
            message: 'Media updated successfully.',
            data: media
        };
    } catch (error) {
        return {
            status: 'error',
            message: error?.status === 404 ? 'Media not found.' : 'Error encounter while updating media.',
            data: {}
        };

    }
   }

   async softDeleteMedia(id: string) {
    try {
        const mediaArray = await this.mediaRepository.find({ where: { id: id, isDeleted: false } });

        const media = mediaArray[0];

        if (!media) {
            throw new NotFoundException('Media not found');
        }

        media.isDeleted = true;
        media.updatedAt = new Date();
        media.deletedAt = new Date();

        await this.mediaRepository.save(media);

        return {
            status: 'success',
            message: 'Media deleted successfully.',
            data: media
        };
    } catch (error) {
        return {
            status: 'error',
            message: error?.status === 404 ? 'Media not found.' : 'Error encounter while deleting media.',
            data: {}
        };

    }
   }
}


