import { Module, OnModuleInit } from '@nestjs/common';
import { SearchService } from './search/search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ElasticsearchModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                node: configService.get('ELASTICSEARCH_NODE'),
                auth: {
                    username: configService.get('ELASTICSEARCH_USERNAME'),
                    password: configService.get('ELASTICSEARCH_PASSWORD')
                }
            }),
            inject: [ConfigService]
        })
    ],
    providers: [SearchService],
    exports: [SearchService]
})
export class SearchModule implements OnModuleInit {
    constructor(private readonly searchService: SearchService) {}
    public async onModuleInit() {
        await this.searchService.createIndex();
    }
}
