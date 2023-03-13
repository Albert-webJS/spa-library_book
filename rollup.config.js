import css from "rollup-plugin-import-css";
import alias from "@rollup/plugin-alias";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/app.ts",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [
    alias({
      entries: [
        { find: 'views', replacement: './src/views/*'}
      ],
    }),
    css(),
    nodeResolve(),
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
    }),
  ],
};
