import type { tree } from './tree';
/**
 * Changes to the tree data
 */
export declare type trees_history = {
    /**
     * URL-friendly id
     */
    id: string;
    /**
     * Date and time when change happened.
     */
    changedAt?: string;
    /**
     * Tree state before manipulation.
     */
    definition: tree;
    uId?: string;
};
