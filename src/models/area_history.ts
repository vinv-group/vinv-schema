/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { new_area } from './new_area';

/**
 * Changes to the track data
 */
export type area_history = {
    /**
     * URL-friendly id
     */
    id?: string;
    /**
     * Date and time when change happened.
     */
    changedAt?: string;
    /**
     * Tree state before manipulation.
     */
    definition?: new_area;
    uId?: string;
}
