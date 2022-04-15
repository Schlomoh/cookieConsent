import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import createTransformer from "typescript-plugin-styled-components";

const packageJson = require("./package.json");
// const styledComponentsTransformer = createTransformer({
//   displayName: true,
//   ssr: true
// });

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        // transformers: [() => ({ before: [styledComponentsTransformer] })],
      }),
      getBabelOutputPlugin({
        presets: ["@babel/preset-env", "@babel/preset-react"],
      }),
      terser({compress: true, format: { comments: false } }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
