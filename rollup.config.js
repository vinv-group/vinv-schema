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
                module: "ESNext",
                exclude: ["tmp"]
            }),
            nodeResolve({
                browser: true
            }),
            json(),
            commonjs()
        ]
    }
];