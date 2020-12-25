# CODESPEED

一个 Web 练手项目

## 参与开发

```sh
git clone https://github.com/tshemeng/codespeed.git -b dev
cd codespeed
pnpm i # npm i -g pnpm
pnpm run dev
```

## 已知问题

需要禁用部分 VSCode 插件

- 禁用 npm 插件，规避 package.json 报类型错错误
- 禁用 Vue 3 Snippets Highlight Formatters And Generator 插件，规避 .vue 文件报语法错误
- 禁用 eslint 插件
