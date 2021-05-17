import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from "rollup-plugin-typescript2";
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: 'dist/index.tsx',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.tsx',
        format: 'es',
        export: 'named'
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true
      }),
      babel({
        exclude: 'node_modules/**',
        presets: [
          '@babel/preset-react'
        ]
      }),
      external(),
      resolve(),
      typescript({ useTsconfigDeclarationDir: true }),
      terser()
    ]

  }
]
