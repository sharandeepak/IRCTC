import { Body, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ElasticsearchService } from "@nestjs/elasticsearch";

@Injectable()
export class SearchService {
    constructor(
        private readonly searchService: ElasticsearchService,
        private readonly configService: ConfigService
    ) {}

    async createIndex() {
        try {
            const index = this.configService.get('ELASTICSEARCH_INDEX');
            const checkIndex = await this.searchService.indices.exists({ index });
            if (checkIndex === false) {
                console.log("index doesn't exists");
                const createdIndex = await this.searchService.indices.create({
                    index
                });
                return createdIndex;
            } else {
                console.log('index exists');
            }
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async create(indexName: string, id: string, doc: any) {
        try {
            const createdDoc = await this.searchService.index({
                index: indexName,
                id: id,
                document: doc
            });
            return createdDoc;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async get(indexName: string, id: string) {
        try {
            const receivedDoc = await this.searchService.get({
                index: indexName,
                id: id
            });
            return receivedDoc;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async getAll(indexName: string) {
        try {
            const receivedDoc = await this.searchService.search({});
            return receivedDoc;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async update(indexName: string, id: string, doc: any) {
        try {
            const updatedDoc = await this.searchService.update({
                index: indexName,
                id: id,
                doc: doc
            });
            return updatedDoc;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async delete(indexName: string, id: string) {
        try {
            const deletedDoc = await this.searchService.delete({
                index: indexName,
                id: id
            });
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async searchByName(indexName: string, name: string) {
        try {
            const receivedDoc = await this.searchService.search({
                query: {
                    match_phrase_prefix: {
                        name: name
                    }
                }
            });
            return receivedDoc;
        } catch (error) {
            throw new Error(error.toString());
        }
    }
}
