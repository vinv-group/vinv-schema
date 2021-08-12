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
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            items: ({
                $ref: string;
                title?: undefined;
                description?: undefined;
                type?: undefined;
                minimum?: undefined;
                maximum?: undefined;
                multipleOf?: undefined;
                examples?: undefined;
                format?: undefined;
                items?: undefined;
            } | {
                title: string;
                description: string;
                type: string[];
                minimum: number;
                maximum: number;
                multipleOf: number;
                $ref?: undefined;
                examples?: undefined;
                format?: undefined;
                items?: undefined;
            } | {
                title: string;
                description: string;
                type: string[];
                $ref: string;
                minimum?: undefined;
                maximum?: undefined;
                multipleOf?: undefined;
                examples?: undefined;
                format?: undefined;
                items?: undefined;
            } | {
                title: string;
                description: string;
                examples: string[];
                type: string[];
                format: string;
                $ref?: undefined;
                minimum?: undefined;
                maximum?: undefined;
                multipleOf?: undefined;
                items?: undefined;
            } | {
                title: string;
                description: string;
                type: string[];
                items: {
                    $ref: string;
                };
                $ref?: undefined;
                minimum?: undefined;
                maximum?: undefined;
                multipleOf?: undefined;
                examples?: undefined;
                format?: undefined;
            })[];
        };
        trees_history: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            items: ({
                title: string;
                description: string;
                type: string;
                pattern: string;
                maxLength: number;
                examples?: undefined;
                format?: undefined;
                $ref?: undefined;
            } | {
                title: string;
                description: string;
                examples: string[];
                type: string;
                format: string;
                pattern?: undefined;
                maxLength?: undefined;
                $ref?: undefined;
            } | {
                title: string;
                description: string;
                $ref: string;
                type?: undefined;
                pattern?: undefined;
                maxLength?: undefined;
                examples?: undefined;
                format?: undefined;
            })[];
        };
        track: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            additionalItem: boolean;
            items: ({
                title: string;
                minItems: number;
                type: string;
                items: {
                    $ref: string;
                }[];
                additionalItems: {
                    $ref: string;
                };
                description?: undefined;
                minimum?: undefined;
                maximum?: undefined;
            } | {
                title: string;
                description: string;
                type: string;
                minimum: number;
                maximum: number;
                minItems?: undefined;
                items?: undefined;
                additionalItems?: undefined;
            })[];
        };
        track_history: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            items: ({
                title: string;
                description: string;
                type: string;
                pattern: string;
                maxLength: number;
                examples?: undefined;
                format?: undefined;
                $ref?: undefined;
            } | {
                title: string;
                description: string;
                examples: string[];
                type: string;
                format: string;
                pattern?: undefined;
                maxLength?: undefined;
                $ref?: undefined;
            } | {
                title: string;
                description: string;
                $ref: string;
                type?: undefined;
                pattern?: undefined;
                maxLength?: undefined;
                examples?: undefined;
                format?: undefined;
            })[];
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
            }[];
        };
        area_history: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            items: ({
                title: string;
                description: string;
                type: string;
                pattern: string;
                maxLength: number;
                examples?: undefined;
                format?: undefined;
                $ref?: undefined;
            } | {
                title: string;
                description: string;
                examples: string[];
                type: string;
                format: string;
                pattern?: undefined;
                maxLength?: undefined;
                $ref?: undefined;
            } | {
                title: string;
                description: string;
                $ref: string;
                type?: undefined;
                pattern?: undefined;
                maxLength?: undefined;
                examples?: undefined;
                format?: undefined;
            })[];
        };
        location: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            additionalItems: boolean;
            items: ({
                $ref: string;
                title?: undefined;
                description?: undefined;
                type?: undefined;
                minimum?: undefined;
            } | {
                title: string;
                description: string;
                type: string[];
                minimum: number;
                $ref?: undefined;
            })[];
        };
        coordinates: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            additionalItems: boolean;
            items: ({
                title: string;
                description: string;
                type: string;
                minimum: number;
                maximum: number;
            } | {
                type: string;
                title: string;
                description: string;
                minimum: number;
                maximum?: undefined;
            })[];
        };
        dbh: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            minItems: number;
            maxItems: number;
            items: ({
                type: string;
                title: string;
                description: string;
                const: number;
                default: number;
                minimum?: undefined;
                maximum?: undefined;
            } | {
                type: string;
                title: string;
                description: string;
                minimum: number;
                maximum: number;
                const?: undefined;
                default?: undefined;
            })[];
        };
        species: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            pattern: string;
            examples: string[];
        };
        dimensions_trunk: {
            $schema: string;
            title: string;
            type: string[];
            uniqueItems: boolean;
            minItems: number;
            items: {
                $ref: string;
            };
        };
        dimensions_crown: {
            $schema: string;
            title: string;
            type: string[];
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
            items: ({
                type: string;
                title: string;
                description: string;
                minimum: number;
                maximum: number;
                examples: number[];
            } | {
                type: string;
                title: string;
                description: string;
                minimum: number;
                maximum: number;
                examples?: undefined;
            })[];
        };
        filter: {
            $schema: string;
            title: string;
            type: string;
            items: ({
                title: string;
                type: string[];
                minItems: number;
                maxItems: number;
                uniqueItems: boolean;
                items: ({
                    $ref: string;
                    title?: undefined;
                    description?: undefined;
                    examples?: undefined;
                    type?: undefined;
                } | {
                    title: string;
                    description: string;
                    examples: string[];
                    type: string;
                    $ref?: undefined;
                })[];
                description?: undefined;
            } | {
                title: string;
                description: string;
                type: string[];
                items: {
                    $ref: string;
                };
                minItems?: undefined;
                maxItems?: undefined;
                uniqueItems?: undefined;
            } | {
                title: string;
                description: string;
                type: string[];
                minItems: number;
                maxItems: number;
                items: ({
                    title: string;
                    type: string[];
                    minimum: number;
                    maximum?: undefined;
                } | {
                    title: string;
                    type: string[];
                    maximum: number;
                    minimum?: undefined;
                })[];
                uniqueItems?: undefined;
            } | {
                title: string;
                description: string;
                type: string[];
                minItems: number;
                maxItems: number;
                items: ({
                    title: string;
                    type: string[];
                    minimum: number;
                    multipleOf: number;
                    maximum?: undefined;
                } | {
                    title: string;
                    type: string[];
                    maximum: number;
                    multipleOf: number;
                    minimum?: undefined;
                })[];
                uniqueItems?: undefined;
            } | {
                title: string;
                description: string;
                type: string[];
                minItems: number;
                maxItems: number;
                items: {
                    title: string;
                    description: string;
                    examples: string[];
                    type: string;
                    format: string;
                }[];
                uniqueItems?: undefined;
            })[];
            additionalItems: boolean;
        };
        image: {
            $schema: string;
            title: string;
            description: string;
            type: string;
            pattern: string;
            examples: string[];
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
