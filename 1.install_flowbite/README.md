# 添加 flowbite ui 库

## 1. 添加 tailwindcss

首先安装 tailwindcss，postcss 和 autoprefixer。会自动创建 `tailwind.config.js`、`postcss.config.js` 文件。

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

然后修改 `tailwind.config.js` 文件，添加 `content` 字段，指定 tailwindcss 扫描的文件。

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

并添加 `@tailwind` 到 `index.css` 文件中。

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 2. 添加 flowbite

添加依赖

```shell
npm install flowbite flowbite-react
```

添加 flowbite 到 `tailwind.config.js` 文件中。

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
};
```

## 3. 验证

在 `App.tsx` 文件中添加 flowbite 组件。
