/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { tree } from './tree';
import type { trees_history } from './trees_history';

export type inventory = {
    /**
     * List of individual tree definitions
     */
    treeList: Array<tree>;
    treeHistory?: Array<trees_history>;
}
