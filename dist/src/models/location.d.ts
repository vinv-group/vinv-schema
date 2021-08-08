import type { coordinates } from './coordinates';
export declare type location = {
    coordinates: coordinates;
    /**
     * The decimal accuracy of coordinates in meter (2 decimal places max).
     */
    accuracy?: number;
};
