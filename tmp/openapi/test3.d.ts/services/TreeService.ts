/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorModel } from '../models/ErrorModel';
import type { tree } from '../models/tree';
import { request as __request } from '../core/request';

export class TreeService {

    /**
     * Creates new Tree
     * @returns string Add Individual Tree.
     * @returns ErrorModel error payload
     * @throws ApiError
     */
    public static async addTree(): Promise<string | ErrorModel> {
        const result = await __request({
            method: 'POST',
            path: `/tree`,
        });
        return result.body;
    }

    /**
     * Find tree by ID
     * Returns tree based on ID
     * @param treeId ID of tree to use
     * @returns tree Individual Tree.
     * @throws ApiError
     */
    public static async getTreeById(
        treeId: string,
    ): Promise<tree> {
        const result = await __request({
            method: 'GET',
            path: `/tree/${treeId}`,
        });
        return result.body;
    }

}