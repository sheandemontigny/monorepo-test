import packageJson from "./package.json";
import vue from "rollup-plugin-vue";
import ts from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "esm",
      file: packageJson.module,
      sourcemap: true,
    },
  ],
  external: ["vue", "vuetify/lib"],
  plugins: [vue(), ts()],
};
