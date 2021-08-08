import type { dimensions_crown } from './dimensions_crown';
import type { dimensions_trunk } from './dimensions_trunk';
import type { image } from './image';
import type { location } from './location';
import type { species } from './species';
/**
 * Tree definition
 */
export declare type tree = {
    id: string;
    location: location;
    species: species;
    /**
     * Diameter in centimeter
     */
    dbh: number;
    /**
     * Height in centimeter
     */
    height?: number;
    /**
     * Diameter per height
     */
    trunk?: dimensions_trunk;
    /**
     * Diameter per height
     */
    crown?: dimensions_crown;
    /**
     * Birthday of the tree
     */
    birth?: string;
    /**
     * List of absolute or relative path to file
     */
    image?: Array<image>;
};
