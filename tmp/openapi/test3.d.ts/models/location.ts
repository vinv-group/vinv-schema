/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coordinates } from './coordinates';

export type location = {
    coordinates: coordinates;
    /**
     * The decimal accuracy of coordinates in meter (2 decimal places max).
     */
    accuracy?: number;
}
