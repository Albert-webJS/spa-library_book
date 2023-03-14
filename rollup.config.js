import css from "rollup-plugin-import-css";
import alias from "@rollup/plugin-alias";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

// import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/app.ts",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [
    typescript(),
    nodeResolve(),
    alias({
      src: "./src",
    }),
    css(),
  ],
};
