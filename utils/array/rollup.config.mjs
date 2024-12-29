// 解决引入第三方库报错问题
import resolve from '@rollup/plugin-node-resolve';
// 将 CommonJS 模块转换为 ES6 模块
import commonjs from '@rollup/plugin-commonjs';
// 使用 Babel 转译代码
import babel from '@rollup/plugin-babel';
// 压缩和混淆代码
import terser from '@rollup/plugin-terser';
// 处理 JSON 文件
import json from '@rollup/plugin-json';
// 替换代码中的变量
import replace from '@rollup/plugin-replace';
// 自动将 peerDependencies 标记为外部依赖
import external from "rollup-plugin-peer-deps-external";
// ts
import typescript from 'rollup-plugin-typescript2';


export default {
  input: 'src/index.ts', // 入口文件
  output: [
    {
      file: 'dist/utils.cjs.js', // 输出文件路径
      format: 'cjs', // 输出格式
      sourcemap: true, // 生成 sourcemap
    },
    {
      file: 'dist/utils.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/utils.umd.js',
      format: 'umd',
      name: 'Utils', // UMD 格式需要一个全局变量名
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: true
    }),
    json(),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true, // 防止替换操作中的赋值语句
    }),
    external(),
  ],
  external: [
    "the-answer"
  ],
};