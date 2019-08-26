import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  providers: [PostService, PostResolver],
})
export class PostModule {}