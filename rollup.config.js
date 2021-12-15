import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json';
import pkg from './package.json'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel'


export default [
    {
        input: 'src/vinv.js',
        output: [ 
            { // umd
                file: pkg.main,
                format: 'iife',
                name: 'VinvSchema',
                sourcemap: true
            }
        ],
        plugins: [
            /*typescript({
                sourceMap: true,
                target: "es5",
                module: "ESNext",
                exclude: ["tmp"]
            }),*/
            terser(),
            json(),
            resolve({
                browser: true
            }),
            babel({
                exclude: 'node_modules/**',
                extensions: ["js", "ts"]
            }),
            commonjs()
        ]
    },
    {
        input: 'src/vinv.js',
        output: [
            {
                file: pkg.module,
                format: 'cjs',
                sourcemap: true,
                exports: "default"
            }
        ],
        plugins: [
            terser(),
            /*typescript({
                sourceMap: true,
                target: "es5",
                module: "ESNext",
                exclude: ["tmp"]
            }),*/
            resolve({
                browser: false
            }),
            babel({
                exclude: 'node_modules/**',
                extensions: ['.js', '.ts'],
                babelHelpers: 'bundled'
            }),
            json(),
            commonjs()
        ]
    }
];