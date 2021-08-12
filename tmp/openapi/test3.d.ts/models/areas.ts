/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { area_history } from './area_history';
import type { new_area } from './new_area';

export type areas = {
    /**
     * List of logical area definitions
     */
    areaList?: Array<new_area>;
    areaHistory?: Array<area_history>;
}
