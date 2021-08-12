export declare function validateSchema(data: any): boolean;
export declare function validateTree(data: any): boolean;
export declare function validateArea(data: any): boolean;
export declare function getSchema(): {
    $schema: string;
    title: string;
    description: string;
    type: string;
    additionalProperties: boolean;
    definitions: {
        tree: {
            title: string;
            description: string;
            type: string;
            required: string[];
            properties: {
                id: {
                    type: string;
                    pattern: string;
                };
                location: {
                    $ref: string;
                };
                species: {
                    $ref: string;
                };
                dbh: {
                    title: string;
                    description: string;
                    type: string;
                    minimum: number;
                    maximum: number;
                    multipleOf: number;
                };
                height: {
                    title: string;
                    description: string;
                    type: string;
                    minimum: number;
                    maximum: number;
                    multipleOf: number;
                };
                trunk: {
                    title: string;
                    description: string;
                    type: string;
                    $ref: string;
                };
                crown: {
                    title: string;
                    description: string;
                    type: string;
                    $ref: string;
                };
                birth: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                };
                image: {
                    title: string;
                    description: string;
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
        trees_history: {
            title: string;
            description: string;
            type: string;
            required: string[];
            properties: {
                id: {
                    title: string;
                    description: string;
                    type: string;
                    pattern: string;
                    maxLength: number;
                };
                changedAt: {
                    title: string;
                    description: string;
                    examples: string[];
                    type: string;
                    format: string;
                };
                definition: {
                    title: string;
                    description: string;
                    $ref: string;
                };
                uId: {
                    title: string;
                    type: string;
                    pattern: string;
                };
            };
        };
        area: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            additionalItem: boolean;
            items: {
                type: string;
                title: string;
                minItems: number;
                items: {
                    type: string;
                    title: string;
                    items: {
                        $ref: string;
                    };
                    minItems: number;
                };
            };
        };
        area_history: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            properties: {
                id: {
                    title: string;
                    description: string;
                    type: string;
                    pattern: string;
                    maxLength: number;
                };
                changedAt: {
                    title: string;
                    description: string;
                    examples: string[];
                    type: string;
                    format: string;
                };
                definition: {
                    title: string;
                    description: string;
                    $ref: string;
                };
                uId: {
                    title: string;
                    type: string;
                    pattern: string;
                };
            };
        };
        location: {
            title: string;
            description: string;
            type: string;
            required: string[];
            properties: {
                coordinates: {
                    $ref: string;
                };
                accuracy: {
                    title: string;
                    description: string;
                    type: string;
                    minimum: number;
                };
            };
        };
        coordinates: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            additionalItems: boolean;
            items: {
                title: string;
                description: string;
                type: string;
            };
        };
        species: {
            title: string;
            description: string;
            type: string;
            pattern: string;
        };
        dimensions_trunk: {
            $schema: string;
            title: string;
            type: string;
            uniqueItems: boolean;
            minItems: number;
            items: {
                $ref: string;
            };
        };
        dimensions_crown: {
            $schema: string;
            title: string;
            type: string;
            uniqueItems: boolean;
            minItems: number;
            items: {
                $ref: string;
            };
        };
        diameter_height: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            additionalItems: boolean;
            properties: {
                height: {
                    type: string;
                    title: string;
                    description: string;
                    minimum: number;
                    maximum: number;
                    examples: number[];
                };
                diameter: {
                    type: string;
                    title: string;
                    description: string;
                    minimum: number;
                    maximum: number;
                };
            };
        };
        image: {
            title: string;
            description: string;
            type: string;
            pattern: string;
        };
    };
    properties: {
        $schema: {
            type: string;
            examples: string[];
        };
        v: {
            title: string;
            description: string;
            type: string;
            pattern: string;
            examples: string[];
        };
        id: {
            title: string;
            description: string;
            type: string;
            pattern: string;
        };
        created: {
            title: string;
            description: string;
            examples: string[];
            type: string;
            format: string;
        };
        inventory: {
            title: string;
            type: string;
            properties: {
                tree_status: {
                    title: string;
                    description: string;
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                tree_history: {
                    title: string;
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
        areas: {
            title: string;
            type: string;
            properties: {
                area_status: {
                    title: string;
                    description: string;
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                area_history: {
                    title: string;
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
        extensions: {
            title: string;
            description: string;
            type: string;
            propertyNames: {
                pattern: string;
            };
            properties: {};
        };
    };
    required: string[];
    $id: string;
};
export declare function getTreeSchema(): {
    title: string;
    description: string;
    type: string;
    required: string[];
    properties: {
        id: {
            type: string;
            pattern: string;
        };
        location: {
            title: string;
            description: string;
            type: string;
            required: string[];
            properties: {
                coordinates: {
                    $schema: string;
                    title: string;
                    description: string;
                    type: string;
                    minItems: number;
                    maxItems: number;
                    additionalItems: boolean;
                    properties: {
                        longitude: {
                            title: string;
                            description: string;
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        latitude: {
                            title: string;
                            description: string;
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        altitude: {
                            type: string;
                            title: string;
                            description: string;
                            minimum: number;
                        };
                    };
                };
                accuracy: {
                    title: string;
                    description: string;
                    type: string;
                    minimum: number;
                };
            };
        };
        species: {
            title: string;
            description: string;
            type: string;
            pattern: string;
        };
        dbh: {
            title: string;
            description: string;
            type: string;
            minimum: number;
            maximum: number;
            multipleOf: number;
        };
        height: {
            title: string;
            description: string;
            type: string;
            minimum: number;
            maximum: number;
            multipleOf: number;
        };
        trunk: {
            title: string;
            description: string;
            type: string;
            $schema: string;
            uniqueItems: boolean;
            minItems: number;
            items: {
                $schema: string;
                title: string;
                description: string;
                type: string;
                minItems: number;
                maxItems: number;
                additionalItems: boolean;
                properties: {
                    height: {
                        type: string;
                        title: string;
                        description: string;
                        minimum: number;
                        maximum: number;
                        examples: number[];
                    };
                    diameter: {
                        type: string;
                        title: string;
                        description: string;
                        minimum: number;
                        maximum: number;
                    };
                };
            };
        };
        crown: {
            title: string;
            description: string;
            type: string;
            $schema: string;
            uniqueItems: boolean;
            minItems: number;
            items: {
                $schema: string;
                title: string;
                description: string;
                type: string;
                minItems: number;
                maxItems: number;
                additionalItems: boolean;
                properties: {
                    height: {
                        type: string;
                        title: string;
                        description: string;
                        minimum: number;
                        maximum: number;
                        examples: number[];
                    };
                    diameter: {
                        type: string;
                        title: string;
                        description: string;
                        minimum: number;
                        maximum: number;
                    };
                };
            };
            required: string[];
        };
        birth: {
            title: string;
            description: string;
            type: string;
            format: string;
        };
        image: {
            title: string;
            description: string;
            type: string;
            items: {
                title: string;
                description: string;
                type: string;
                pattern: string;
            };
        };
    };
};
export declare function getAreaSchema(): {
    $schema: string;
    title: string;
    description: string;
    type: string;
    minItems: number;
    additionalItem: boolean;
    items: {
        type: string;
        title: string;
        minItems: number;
        items: {
            type: string;
            title: string;
            items: {
                title: string;
                description: string;
                type: string;
                required: string[];
                properties: {
                    coordinates: {
                        $schema: string;
                        title: string;
                        description: string;
                        type: string;
                        minItems: number;
                        maxItems: number;
                        additionalItems: boolean;
                        properties: {
                            longitude: {
                                title: string;
                                description: string;
                                type: string;
                                minimum: number;
                                maximum: number;
                            };
                            latitude: {
                                title: string;
                                description: string;
                                type: string;
                                minimum: number;
                                maximum: number;
                            };
                            altitude: {
                                type: string;
                                title: string;
                                description: string;
                                minimum: number;
                            };
                        };
                    };
                    accuracy: {
                        title: string;
                        description: string;
                        type: string;
                        minimum: number;
                    };
                };
            };
            minItems: number;
        };
    };
};
export declare function getVersion(): string;
