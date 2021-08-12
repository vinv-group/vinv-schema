/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class TreesService {

    /**
     * Returns all trees
     * @returns string A list of pets.
     * @throws ApiError
     */
    public static async getTreesService(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/trees`,
        });
        return result.body;
    }

}