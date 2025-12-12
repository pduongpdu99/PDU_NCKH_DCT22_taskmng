import { IQuery } from "@i/query";
import { ConfigService } from '@nestjs/config';
import CONFIGURATION from "@common/const";

export abstract class ParamHelper {
    constructor(private readonly config: ConfigService) { }
    normalize(query: Record<string, string>): IQuery {
        return {
            limit: Number(query.limit ?? this.config.get(CONFIGURATION.DEFAULT_VALUE.PAGINATION.LIMIT)),
            page: Number(query.limit ?? this.config.get(CONFIGURATION.DEFAULT_VALUE.PAGINATION.PAGE)),
            order: "id desc",
            q: ""
        }
    }
}