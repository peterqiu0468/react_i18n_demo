# i18n

## 添加依赖

添加 `react-i18next` 依赖

```shell
npm install react-i18next
```

## 配置

新增 `i18n` 目录，添加 `index.ts` 文件

```typescript
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    zh: {
      translation: zh,
    },
  },
  fallbackLng: "en",
});
```

新增 `locales` 目录，添加 `en.json` 和 `zh.json` 文件

## 使用

在 `App.tsx` 中使用 `i18n` 组件

```typescript
import "./i18n";
import { useTranslation } from "react-i18next";
```

然后在组件中使用 `useTranslation` 获取 `t` 函数

```typescript
const { t } = useTranslation();
```

最后在需要国际化的地方使用 `t` 函数

```typescript
<Navbar.Collapse>
  <Navbar.Link href="#" active>
    {t("nav.home")}
  </Navbar.Link>
  <Navbar.Link href="#">{t("nav.about")}</Navbar.Link>
  <Navbar.Link href="#">{t("nav.services")}</Navbar.Link>
  <Navbar.Link href="#">{t("nav.pricing")}</Navbar.Link>
  <Navbar.Link href="#">{t("nav.contact")}</Navbar.Link>
</Navbar.Collapse>
```

## 切换语言

结合之前的语言切换，可以在组件中使用 `i18n` 的 `changeLanguage` 方法切换语言

```typescript
const { t, i18n } = useTranslation();
function handleLanguageChange(language: LanguageProps) {
  setLng(language);
  i18n.changeLanguage(language.value);
}
```
