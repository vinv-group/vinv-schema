// Rollup plugins
/*import resolve from '@rollup/plugin-commonjs';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { babel } from '@rollup/plugin-babel';*/

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import pkg from './package.json'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from "rollup-plugin-terser";


export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.module,
                format: 'umd',
                name: 'VinvSchema',
                sourcemap: true
            }
        ],//dist/0.1-alpha.umd.js
        plugins: [
            terser(),
            typescript({
                sourceMap: true,
                target: "es5",
                module: "ESNext"
            }),
            nodeResolve({
                browser: true
            }),
            json(),
            commonjs()
        ]
    }
];
/*
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import pkg from './package.json'
import { terser } from "rollup-plugin-terser";

import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

const extensions = ['.js', '.ts']
export default [
// CommonJS (for Node) and ES module (for bundlers) build.
    {
        input: 'src/index.ts',
        output: [
            
            { // umd
                file: pkg.module,
                format: 'umd',
                name: 'TreeSpecies'
            }
        ],
        plugins: [
            terser(),
            json(),
            resolve({
                browser: true
            }),
            babel({
                exclude: 'node_modules/**',
                extensions
            }),
            commonjs()
        ]
    }
];*/